/* resize by Colin Hale - https://halecolin.com */
function resize(elementId, buttonId) {
    const element = document.getElementById(elementId);
    const button = document.getElementById(elementId);
    const min = 54;
    let initialWidth = 0, initialHeight = 0, mouseX = 0, mouseY = 0, width = 100, height = 100;
  
  
  function displayLayout() {
    let html ="";
    if(document.getElementById('three-column').checked){
      html += "<div class='parent parent-three-column'>";
      html += "<div class='child child-three-column'>parent { display: flex; }</div>";
      html += "<div class='child child-three-column'>child { flex: 1 1 1px }</div>";
      html += "<div class='child child-three-column'></div>";
      html += "</div><div id='button'>Resize</div>";
      document.getElementById('scalable-div').innerHTML = html;
    }
    if(document.getElementById('three-column-stack').checked){
      html += "<div class='parent parent-three-column-stack'>";
      html += "<div class='child child-three-column-stack'>parent { display: flex; flex-wrap: wrap;}</div>";
      html += "<div class='child child-three-column-stack'>child { flex: 1 1 1px; min-width: 100px; }</div>";
      html += "<div class='child child-three-column-stack'></div>";
      html += "</div><div id='button'>Resize</div>";
      document.getElementById('scalable-div').innerHTML = html;
    }
    if(document.getElementById('three-column-stack-all').checked){
      html += "<div class='parent parent-three-column-stack-all'>";
      html += "<div class='child child-three-column-stack-all'>parent { display: flex; flex-wrap: wrap;}</div>";
      html += "<div class='child child-three-column-stack-all'>child { flex: 1 1 100%; }</div>";
      html += "<div class='child child-three-column-stack-all'>@media(min-width:400px) { flex: 1 1 1px;}</div>";
      html += "</div>";
      html +="<div id='button'>Resize</div>";
      document.getElementById('scalable-div').innerHTML = html;
      if( width >= 400 ){
            const all = document.getElementsByClassName('child-three-column-stack-all');
       Array.prototype.forEach.call(all, function(el) {
        el.style.flex = "1 1 1px"; 
         });
        }
     }
     if(document.getElementById('horizontal-stack').checked){
      html += "<div class='parent parent-three-column-stack-all'>";
      html += "<div class='child child-three-column-stack-all'>parent { display: flex; flex-wrap: wrap;}</div>";
      html += "<div class='child child-three-column-stack-all'>child { flex: 1 1 100%; }</div>";
      html += "<div class='child child-three-column-stack-all'></div>";
      html += "</div>";
      html +="<div id='button'>Resize</div>";
      document.getElementById('scalable-div').innerHTML = html;
     }
      if(document.getElementById('responsive-grid').checked){
      html += "<div class='parent parent-responsive-grid'>";
      html += "<div class='child child-responsive-grid'>parent { display: flex; flex-wrap: wrap; }</div>";
      html += "<div class='child child-responsive-grid'>child { height: 100px; flex: 0 1 100px; }</div>";
      html += "<div class='child child-responsive-grid'>Content</div>";
      html += "<div class='child child-responsive-grid'>Content</div>";
      html += "<div class='child child-responsive-grid'>Content</div>";
      html += "<div class='child child-responsive-grid'>Content</div>";
      html += "<div class='child child-responsive-grid'>Content</div>";
      html += "<div class='child child-responsive-grid'>Content</div>";
      html += "<div class='child child-responsive-grid'>Content</div>";
      html += "</div><div id='button'>Resize</div>";
      document.getElementById('scalable-div').innerHTML = html;
    }
    if(document.getElementById('responsive-grid-v').checked){
      html += "<div class='parent parent-responsive-grid-v'>";
      html += "<div class='child child-responsive-grid-v'>parent { display: flex; flex-wrap: wrap; }</div>";
      html += "<div class='child child-responsive-grid-v'>child { flex: 0 1 100px; }</div>";
      html += "<div class='child child-responsive-grid-v'>Content</div>";
      html += "<div class='child child-responsive-grid-v'>Content</div>";
      html += "<div class='child child-responsive-grid-v'>Content</div>";
      html += "<div class='child child-responsive-grid-v'>Content</div>";
      html += "<div class='child child-responsive-grid-v'>Content</div>";
      html += "<div class='child child-responsive-grid-v'>Content</div>";
      html += "<div class='child child-responsive-grid-v'>Content</div>";
      html += "</div><div id='button'>Resize</div>";
      document.getElementById('scalable-div').innerHTML = html;
    }
    if(document.getElementById('responsive-grid-h').checked){
      html += "<div class='parent parent-responsive-grid-h'>";
      html += "<div class='child child-responsive-grid-h'>parent { display: flex; flex-wrap: wrap; }</div>";
      html += "<div class='child child-responsive-grid-h'>child { height: 100px; flex: 1 1 100px; }</div>";
      html += "<div class='child child-responsive-grid-h'>The flex-basis acts as a minimum width</div>";
      html += "<div class='child child-responsive-grid-h'>Content</div>";
      html += "<div class='child child-responsive-grid-h'>Content</div>";
      html += "<div class='child child-responsive-grid-h'>Content</div>";
      html += "<div class='child child-responsive-grid-h'>Content</div>";
      html += "<div class='child child-responsive-grid-h'>Content</div>";
      html += "<div class='child child-responsive-grid-h'>Content</div>";
      html += "</div><div id='button'>Resize</div>";
      document.getElementById('scalable-div').innerHTML = html;
    }
    if(document.getElementById('align-card').checked){
        html += "<div class='parent align-card-container'>";
        html += "<div class='child parent-align-card'>card { display: flex; flex-direction: column; justify-content: space-between; }</div>"
        html += "<div class='child parent-align-card'>"
        html += "<div class='align-card-title'>Title</div>"
        html += "<div class='align-card-excerpt'>This keeps the spacing on the cards aligned across the rows</div>"
        html += "<div class='align-card-image'>Image</div>"
        html += "</div>"
        html += "<div class='child parent-align-card'>"
        html += "<div class='align-card-title'>Title Longer this time really long</div>"
        html += "<div class='align-card-excerpt'>Excerpt This is changing sizes</div>"
        html += "<div class='align-card-image'>Image</div>"
        html += "</div>"
        html += "<div class='child parent-align-card'>"
        html += "<div class='align-card-title'>Title</div>"
        html += "<div class='align-card-excerpt'>Excerpt This is changing sizes to more words here to fill the box</div>"
        html += "<div class='align-card-image'>Image</div>"
        html += "</div>"
        html += "</div><div id='button'>Resize</div>";
        document.getElementById('scalable-div').innerHTML = html;
    }
    if(document.getElementById('mosaic').checked){
        html += "<div class='parent parent-mosaic'>";
        html += "<div class='child child-mosaic large'>parent { display: flex; flex-flow: column wrap; }</div>";
        html += "<div class='child child-mosaic medium'>child { flex 0 1 auto;</div>";
        html += "<div class='child child-mosaic large'>child:nth-child(3n+1) { order: 1; }</div>";
        html += "<div class='child child-mosaic medium'>child:nth-child(3n+2) { order: 1; }</div>";
        html += "<div class='child child-mosaic medium'>child:nth-child(3n) { order: 1; }</div>";
        html += "<div class='child child-mosaic large'>nth-child orders children in a way that you would expect them to be displayed</div>";
        html += "<div class='child child-mosaic small'></div>";
        html += "</div><div id='button'>Resize</div>";
        document.getElementById('scalable-div').innerHTML = html;
    }
    if(document.getElementById('bar-graph-horizontal').checked){
        html += "<div class='parent parent-bar-graph-horizontal'>";
        html += "<div class='child child-bar-graph-horizontal'>50%</div>";
        html += "<div class='child child-bar-graph-horizontal child-bar-graph-30'>30%</div>";
        html += "<div class='child child-bar-graph-horizontal child-bar-graph-80'>80%</div>";
        html += "<div class='child child-bar-graph-horizontal child-bar-graph-100'>100%</div>";
        html += "<div class='child child-bar-graph-horizontal child-bar-graph-40'>40%</div>";
        html += "<div class='child'>parent { display: flex; flex-direction: column; }</div>";
        html += "<div class='child'>child { height: 20px; width: calc(%width - padding); }</div>";
        html += "</div><div id='button'>Resize</div>";
        document.getElementById('scalable-div').innerHTML = html;
      }
      if(document.getElementById('bar-graph-vertical').checked){
        html += "<div class='parent parent-bar-graph-vertical'>";
        html += "<div class='child'>parent { display: flex; flex-direction: column; }</div>";
        html += "<div class='child'>child { height: 20px; width: calc(%width - padding); }</div>";
        html += "<div class='child child-bar-graph-vertical'>50%</div>";
        html += "<div class='child child-bar-graph-vertical child-bar-graph-30-v'>30%</div>";
        html += "<div class='child child-bar-graph-vertical child-bar-graph-80-v'>80%</div>";
        html += "<div class='child child-bar-graph-vertical child-bar-graph-100-v'>100%</div>";
        html += "<div class='child child-bar-graph-vertical child-bar-graph-40-v'>40%</div>";
        html += "</div><div id='button'>Resize</div>";
        document.getElementById('scalable-div').innerHTML = html;
      }
    // if(document.getElementById('responsive-grid').checked){
    //     html += "<div class='parent parent-'>";
    //     html += "<div class='child child-'></div>";
    //     html += "<div class='child child-'></div>";
    //     html += "<div class='child child-'></div>";
    //     html += "</div><div id='button'>Resize</div>";
    //     document.getElementById('scalable-div').innerHTML = html;
    //   }
  }

  document.getElementById('list').addEventListener('click',displayLayout);
  
    //Mousedown event to control scaling with scale() and to add mouseup event to stop scaling with stop()
      button.addEventListener('mousedown', function(e) {
        getMousePositions(e);
        getElementDimensions();
        window.addEventListener('mousemove', scale);
        window.addEventListener('mouseup', removeScale);
      });
    
      //Get x and y mouse position
      function getMousePositions(e) {
        mouseX = e.pageX;
        mouseY = e.pageY;
      }
      
      //Get element height and width make property a number
      function getElementDimensions() {
        initialWidth = element.clientWidth;
        initialHeight = element.clientHeight;
      }
      
      //Sets the width and height bases on how the mouse moves to scale the element
      function scale(e) {
        displayLayout();
        width = initialWidth + (e.pageX - mouseX);
        height = initialHeight + (e.pageY - mouseY);
        if (width > min) {
          element.style.width = width + 'px';
        }
        if (height > min) {
          element.style.height = height + 'px';
        }
      }
      
      //Removes the scale() function to stop scaling element
      function removeScale() {
        window.removeEventListener('mousemove', scale);
      }
      
      //Mobile event listeners
      button.addEventListener("touchstart", function(e) {
        e.preventDefault();
        getAxisPositions(e);
        getElementDimensions();
        window.addEventListener('touchmove', scaleMobile);
        window.addEventListener('touchend', removeScaleMobile);
      });
    
      //Scale function for mobile
      function scaleMobile(e) {
        displayLayout();
        width = initialWidth + (e.touches[0].pageX - mouseX);
        height = initialHeight + (e.touches[0].pageY - mouseY);
        if (width > min) {
          element.style.width = width + 'px';
        }
        if (height > min) {
          element.style.height = height + 'px';
        }
      }
    
      //Mobile get touch location
      function getAxisPositions(e) {
        mouseX = e.touches[0].pageX;
        mouseY = e.touches[0].pageY;
      }
    
      //Removes Mobile Scale
      function removeScaleMobile() {
        window.removeEventListener('touchmove', scaleMobile);
      }
    }
  
  resize('scalable-div','button');