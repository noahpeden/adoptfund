import React, { Component } from 'react'
import axios from 'axios'

class PhotoUpload extends Component {

  initUpload(e) {
    const files = document.getElementById('file-input').files
    const file = files[0]
    if (file == null) {
      return alert('No file  selected.')
    }
    fetch(`https://f2ea21bf.ngrok.io/api/v1/family/pic?file-name=${file.name}&file-type=${file.type}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ file }),
    })
    .then(data => {
      data.json()
    })
    .then(data => {
      this.uploadFile(file, data.signedRequest, data.url)
    })
    .catch(err => console.log(err))
  }

  uploadFile(file, signedRequest, url) {
    const xhr = new XMLHttpRequest()
    xhr.open('PUT', signedRequest)
    xhr.onreadystatechange = () => {
     if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            console.log(xhr.status)
          }
          else {
            alert('Could not upload file.')
          }
        }
      }
      xhr.send(file);
    }

  render() {
    return (
      <div>
        <input type="file" id="file-input" onChange={(e) => this.initUpload()} />
        <p id='status'>Please select a file</p>
      </div>
    )
  }
}

export default PhotoUpload
