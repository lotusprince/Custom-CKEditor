CKEDITOR.on('dialogDefinition', function (ev) {
    // Take the dialog name and its definition from the event data.
    var dialogName = ev.data.name;
    var dialogDefinition = ev.data.definition;

    // Check if the definition is from the dialog we're
    // interested on (the Link dialog).
    if (dialogName == 'link') {
        // FCKConfig.LinkDlgHideAdvanced = true
        dialogDefinition.removeContents('advanced');

        // FCKConfig.LinkDlgHideTarget = true
        dialogDefinition.removeContents('target');
        /*
        Enable this part only if you don't remove the 'target' tab in the previous block.
 
        // FCKConfig.DefaultLinkTarget = '_blank'
        // Get a reference to the "Target" tab.
        var targetTab = dialogDefinition.getContents( 'target' );
        // Set the default value for the URL field.
        var targetField = targetTab.get( 'linkTargetType' );
        targetField[ 'default' ] = '_blank';
        */
    }

    if (dialogName == 'image') {
        // FCKConfig.ImageDlgHideAdvanced = true	
        //dialogDefinition.removeContents('info');
        dialogDefinition.removeContents('advanced');       
        dialogDefinition.removeContents('Link');
       
    }

    if (dialogName == 'flash') {
        // FCKConfig.FlashDlgHideAdvanced = true
        dialogDefinition.removeContents('advanced'); //
        dialogDefinition.removeContents('properties');
    }

});