// Adobe Illustrator script to ungroup Swatch Groups

function SwatchesUngroup() {

  // Script ID variables
  var scriptID = 'SwatchesUngroup';
  var scriptDescription = 'Ungroups all swatch groups.';

  // Bail if no open documents
  if (app.documents.length == 0) {
      alert('Oops! No open documents.',scriptID);
      return;
  } 

  // Local variables
  var aDoc = app.activeDocument;  
  var aDocSwatchGroups = aDoc.swatchGroups;
  var mainGroup = aDocSwatchGroups[0]; // 'ungrouped' swatches at top of panel

  // Run script? 
  var promptSwatches = confirm(scriptDescription + '\n\nContinue?', false, scriptID);

  // Bail if No or Cancel or X
  if (promptSwatches != true ) {
      alert('Script has been stopped.', scriptID);
      return; 
  }

  // Bail if no swatch groups
  if (aDocSwatchGroups.length < 2) {
      alert('No swatch groups to ungroup.', scriptID);
      return;   
  }

  // Move swatches to mainGroup and delete empty groups
  while (aDocSwatchGroups.length > 1) {

      var swatches = aDocSwatchGroups[1].getAllSwatches()

      for (var j = 0; j < swatches.length; j++) {
          var swatch = swatches[j];
          mainGroup.addSwatch(swatch);
      }     

      aDocSwatchGroups[1].remove()
  }

} // function


// Run this puppy :)
SwatchesUngroup();
