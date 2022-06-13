
async function handleGetRequest(request) {

  let text = request.url;
  const myArray = text.split("/admin/");
  result = myArray[1];
  link = result.substring(0,result.length-1);
  console.log('link: '+link);

  try {
    const response = await fetch(request);
    const responseClone = response.clone();
    if (responseClone.status === 200) {
      const data = await responseClone.json();
      // destroy the old cache
      // await remoteCache.destroy();
      // create a new remote cache (db)
      remoteCache = new this.PouchDB('remote-cache');
      await Promise.all(data.map(form => {
        // this one work nice
        return { _id: form.id,type: link, ...form };
      }).map(async (form) => {
        try {
          const result = await remoteCache.put(form);
          console.log('INSERT FORM ', result);
        } catch (error) {
          if (error.name === 'conflict') {
            console.log('CONFLICT FORM', error);
            try {
              const doc = await remoteCache.get(form._id);
              console.log('UPDATE FORM', await remoteCache.put({ ...form, ...doc }));
            } catch (error) {
              console.log('UPDATE FORM ERROR', error);
              throw error;
            }
          } else {
            console.log('INSERT FORM ERROR', error);
            throw error;
          }
        }
      }));
    }
    return response;
  } catch (error) {
    console.info('FETCH FROM CACHE');
    try {
      const result = await remoteCache.allDocs({
        include_docs: true, // otherwise only id and revision is returned
        attachments: true // include attachments as base64
      });
      // console.log(row.doc.type);

      return new Response(JSON.stringify(result.rows.filter(row => row.doc.type === link ).map( row => row.doc )),
      // return new Response(JSON.stringify(result.rows.filter(row => row.doc.type === link ).map( row => {
      //   row =>  row.doc )),
          // row.doc
      // })),
        {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
        ok: true,
      });
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
}




async function handlePostRequest(request) {
  const requestClone = request.clone();
  try {
    const response = await fetch(request);
    const responseClone = response.clone();
    // if the response = 200 we don'thave to do anything house -> leave
    if (responseClone.status === 200) {
      return response;
    }
    // if the response != 200 so there is connection but something house happend (405,404...)
    return response;
  } catch (error) {
    // if there is no connection
    console.info('POST TO CACHE');
    try {
      //get the form input and save it as json
      const formData = await requestClone.json();
      // save in the pending cache -> to save after
      // save the formData in pending cache
      const result = await pendingCache.post(formData);
      // Respond with a body similar to that of the real backend
      // save in the database and return the response with 200 else retirn err -- one by one (item)
      return new Response(JSON.stringify(formData), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
        ok: true,
      });
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
}
