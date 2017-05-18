import React, { Component } from 'react'

class PhotoUpload extends Component {
  initUpload(e) {
    const files = document.getElementById('file-input').files
    const file = files[0]
    let form = new FormData()
    form.append('file', file)
    if (file == null) {
      return alert('No file  selected.')
    }
    fetch(`https://adopt-fund-api.herokuapp.com/api/v1/family/pic?file-name=${file.name}&file-type=${file.type}`, {
      method: 'POST',
      body: form,
    })
    .then((response) => response.json())
    .then((data) => {
      return data
    })
    .catch(err => console.log(err))
  }

  render() {
    return (
      <div>
        <p id='status'>Select a family photo</p>
        <input type='file' id='file-input' onChange={(e) => this.initUpload()} />
      </div>
    )
  }
}

export default PhotoUpload
