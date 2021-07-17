import React, { useState, useEffect } from 'react';
import Editor from './Editor'
import useLocalStorage from '../hooks/useLocalStorage'
import PropTypes from 'prop-types';
 
function HTMLEDITOR(){
    return(
        <div>
            <Editor
          language="xml"
          displayName="HTML"
          value={html}
          onChange={setHtml}
        />
        </div>
    );
}