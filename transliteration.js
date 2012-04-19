/*
*  How to setup a textarea that allows Transliteration from English to Hindi.
*/

google.load("elements", "1", {packages: "transliteration"});

function OnLoad() {
  var content = document.getElementById('content');
  
  var options = {
  sourceLanguage: 'en',
  destinationLanguage:
	['hi', 'bn', 'fa', 'gu', 'kn', 'ml', 'mr', 'ne', 'pa', 'ta',
	 'te','ur'],
  shortcutKey: 'ctrl+g',
  transliterationEnabled: false
  };

  // Create an instance on TransliterationControl with the required
  // options.
  var control =
	  new google.elements.transliteration.TransliterationControl(options);

  // Enable transliteration in the textbox with id
  // 'transliterateTextarea'.
  control.makeTransliteratable(['fld1']);
  control.makeTransliteratable(['fld2']);
  
  control.showControl('google_button');
}

google.setOnLoadCallback(OnLoad);