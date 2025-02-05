/**
 * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

var CKBUILDER_CONFIG = {
	skin: 'moono-lisa',
	preset: 'basic',
	ignore: [
		'.DS_Store',
		'.bender',
		'.editorconfig',
		'.gitattributes',
		'.github',
		'.gitignore',
		'.gitattributes',
		'.github',
		'gruntfile.js',
		'.idea',
		'.jscsrc',
		'.jshintignore',
		'.jshintrc',
		'.mailmap',
		'.nvmrc',
		'.npm',
		'.travis.yml',
		'CHANGES.md',
		'config.js',
		'README.md',
		'adapters',
		'bender-err.log',
		'bender-out.log',
		'bender.ci.js',
		'bender.js',
		'contents.css',
		'dev',
		'docs',
		'gruntfile.js',
		'less',
		'node_modules',
		'package.json',
		'samples',
		'skins/kama',
		'skins/moono',
		'styles.js',
		'tests',
		'lang/_translationstatus.txt',
		'plugins/a11yhelp',
		'plugins/about',
		'plugins/adobeair',
		'plugins/ajax',
		'plugins/attachment',
		'plugins/autocomplete',
		'plugins/autoembed',
		'plugins/autogrow',
		'plugins/autolink',
		'plugins/balloonpanel',
		'plugins/balloontoolbar',
		'plugins/bbcode',
		'plugins/bidi',
		'plugins/cloudservices',
		'plugins/codesnippetgeshi',
		'plugins/colordialog',
		'plugins/contextmenu',
		'plugins/copyformatting',
		'plugins/devtools',
		'plugins/dialogadvtab',
		'plugins/div',
		'plugins/divarea',
		'plugins/docprops',
		'plugins/easyimage',
		'plugins/elementspath',
		'plugins/embed',
		'plugins/embedbase',
		'plugins/embedsemantic',
		'plugins/emoji',
		'plugins/enterkey',
		'plugins/filebrowser',
		'plugins/filetools',
		'plugins/find',
		'plugins/flash',
		'plugins/floatpanel',
		'plugins/floatingspace',
		'plugins/format',
		'plugins/forms',
		'plugins/horizontalrule',
		'plugins/htmlwriter',
		'plugins/iframe',
		'plugins/iframedialog',
		'plugins/image2',
		'plugins/imagebase',
		'plugins/indentblock',
		'plugins/indentlist',
		'plugins/justify',
		'plugins/language',
		'plugins/listblock',
		'plugins/liststyle',
		'plugins/mathjax',
		'plugins/maximize',
		'plugins/mentions',
		'plugins/menu',
		'plugins/menubutton',
		'plugins/newpage',
		'plugins/notificationaggregator',
		'plugins/pagebreak',
		'plugins/panel',
		'plugins/panelbutton',
		'plugins/pastefromword',
		'plugins/pastetext',
		'plugins/placeholder',
		'plugins/popup',
		'plugins/preview',
		'plugins/print',
		'plugins/removeformat',
		'plugins/resize',
		'plugins/richcombo',
		'plugins/save',
		'plugins/selectall',
		'plugins/sharedspace',
		'plugins/showblocks',
		'plugins/showborders',
		'plugins/smiley',
		'plugins/sourcedialog',
		'plugins/specialchar',
		'plugins/stylescombo',
		'plugins/stylesheetparser',
		'plugins/tab',
		'plugins/table',
		'plugins/tableresize',
		'plugins/tableselection',
		'plugins/tabletools',
		'plugins/templates',
		'plugins/textmatch',
		'plugins/textwatcher',
		'plugins/uicolor',
		'plugins/uploadfile',
		'plugins/uploadimage',
		'plugins/uploadwidget',
		'plugins/xml',
		'plugins/wysiwygarea',
		'plugins/basicstyles',
		'plugins/blockquote',
		'plugins/button',
		'plugins/clipboard/icons',
		'plugins/clipboard/lang',
		'plugins/clipboard/plugin.js',
		'plugins/codesnippet/icons',
		'plugins/codesnippet/lib',
		'plugins/codesnippet/lang',
		'plugins/codesnippet/plugin.js',
		'plugins/colorbutton',
		'plugins/entities/plugin.js',
		'plugins/fakeobjects',
		'plugins/font',
		'plugins/image/icons',
		'plugins/image/plugin.js',
		'plugins/image/lang',
		'plugins/indent',
		'plugins/link/icons',
		'plugins/link/images',
		'plugins/link/lang',
		'plugins/link/plugin.js',
		'plugins/list',
		'plugins/notification',
		'plugins/magicline',
		'plugins/sourcearea',
		'plugins/toolbar',
		'plugins/undo',
		'plugins/widget/lang',
		'plugins/widget/plugin.js',
		'plugins/widgetselection'
	],
	plugins : {
		'attachment' : 1,
		'autogrow' : 1,
		'basicstyles' : 1,
		'bbcode' : 1,
		'blockquote' : 1,
		'clipboard' : 1,
		'codesnippet' : 1,
		'colorbutton' : 1,
		'enterkey' : 1,
		'entities' : 1,
		'font' : 1,
		'image' : 1,
		'indentlist' : 1,
		'link' : 1,
		'list' : 1,
		'sourcearea' : 1,
		'toolbar' : 1,
		'undo' : 1,
		'wysiwygarea' : 1
	},
	languages : {
		'af' : 1,
		'ar' : 1,
		'az' : 1,
		'bg' : 1,
		'bn' : 1,
		'bs' : 1,
		'ca' : 1,
		'cs' : 1,
		'cy' : 1,
		'da' : 1,
		'de' : 1,
		'de-ch' : 1,
		'el' : 1,
		'en' : 1,
		'en-au' : 1,
		'en-ca' : 1,
		'en-gb' : 1,
		'eo' : 1,
		'es' : 1,
		'es-mx' : 1,
		'et' : 1,
		'eu' : 1,
		'fa' : 1,
		'fi' : 1,
		'fo' : 1,
		'fr' : 1,
		'fr-ca' : 1,
		'gl' : 1,
		'gu' : 1,
		'he' : 1,
		'hi' : 1,
		'hr' : 1,
		'hu' : 1,
		'id' : 1,
		'is' : 1,
		'it' : 1,
		'ja' : 1,
		'ka' : 1,
		'km' : 1,
		'ko' : 1,
		'ku' : 1,
		'lt' : 1,
		'lv' : 1,
		'mk' : 1,
		'mn' : 1,
		'ms' : 1,
		'nb' : 1,
		'nl' : 1,
		'no' : 1,
		'oc' : 1,
		'pl' : 1,
		'pt' : 1,
		'pt-br' : 1,
		'ro' : 1,
		'ru' : 1,
		'si' : 1,
		'sk' : 1,
		'sl' : 1,
		'sq' : 1,
		'sr' : 1,
		'sr-latn' : 1,
		'sv' : 1,
		'th' : 1,
		'tr' : 1,
		'tt' : 1,
		'ug' : 1,
		'uk' : 1,
		'vi' : 1,
		'zh' : 1,
		'zh-cn' : 1
	}
};