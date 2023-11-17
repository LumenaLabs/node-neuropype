/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable no-redeclare */

import { default as SchemaEntity } from '@sprucelabs/schema'
import * as SpruceSchema from '@sprucelabs/schema'





export declare namespace SpruceErrors.NodeNeuropype {

	
	export interface PipelineNotFound {
		
			
			'path': string
	}

	export interface PipelineNotFoundSchema extends SpruceSchema.Schema {
		id: 'pipelineNotFound',
		namespace: 'NodeNeuropype',
		name: 'Pipeline not found!',
		    fields: {
		            /** . */
		            'path': {
		                type: 'text',
		                isRequired: true,
		                options: undefined
		            },
		    }
	}

	export type PipelineNotFoundEntity = SchemaEntity<SpruceErrors.NodeNeuropype.PipelineNotFoundSchema>

}



export declare namespace SpruceErrors.NodeNeuropype {

	
	export interface MissingNeuropypeBaseUrlEnv {
		
	}

	export interface MissingNeuropypeBaseUrlEnvSchema extends SpruceSchema.Schema {
		id: 'missingNeuropypeBaseUrlEnv',
		namespace: 'NodeNeuropype',
		name: 'Missing NEUROPYPE_BASE_URL env variable!',
		    fields: {
		    }
	}

	export type MissingNeuropypeBaseUrlEnvEntity = SchemaEntity<SpruceErrors.NodeNeuropype.MissingNeuropypeBaseUrlEnvSchema>

}




