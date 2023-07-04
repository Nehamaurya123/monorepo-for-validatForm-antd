import React from 'react';
import { Upload, Button } from 'antd';

const UploadFile = () => {
  return (
    <>
      <div className="outter_container">
        <div className="container">
          <h1>hii this is file uploading page</h1>
          <Upload action={'http://localhost:3000/'}>
            <Button> Click Upload</Button>
          </Upload>
        </div>
        <div className="container">
          <h1>hii this is file uploading page</h1>
          <Upload.Dragger action={'http://localhost:3000/'}>
            Drag files her4e or
            <Button> Click Upload</Button>
          </Upload.Dragger>
        </div>
      </div>
    </>
  );
};

export default UploadFile;
