'use babel';

import { exec } from 'child_process';

export default {
	activate( state )
	{
		atom.workspace.observeTextEditors( editor =>
		{
			editor.onDidSave( evt =>
			{
				const projectRoot = atom.project.getPaths()[0];
				const filePath = evt.path;

				console.log( 'Running treefmt', filePath, projectRoot );
				exec( `treefmt "${filePath}"`, { cwd: projectRoot } );
			} );
		} );
	},
};
