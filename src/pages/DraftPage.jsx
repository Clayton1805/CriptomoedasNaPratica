import { useState } from 'react';
import { DraftTextComponent } from '../components';

const data = require('../data');

function DraftPage() {

  const [arrayContent, setArrayContent] = useState(data);

  

  // const funcOla = ({ target }) => {
  //   console.log('olaa', target.innerHTML)
  //   console.log('olaa 2', target.innerText)
  // }

  return (
    <>
      {/* {console.log('arrayContent', arrayContent)} */}
      <div name="conteúdo">
        {
          arrayContent.map((element) => {
            const content = element.content;
            switch (element.type) {
              case 'text': return <DraftTextComponent content={ content } />;
              default: return <></>;
            }
          })
        }
        {/* <p
          contenteditable="true"
          onInput={ funcOla }
          id="editor"
        >
          This is a paragraph. It is editable. Try to change this
          <span  contenteditable="false"
            style={{
              color: "#21a809"
            }}
          >
            gitHub
          </span>
          text.</p> */}
      </div>
      <div name="modificadores">
        <p>modificadores</p>
        <div>
          <label htmlFor="">
            <input type="text"/>
          </label>
        </div>
      </div>
    </>
  );
}

export default DraftPage;
