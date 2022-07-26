import { defineConfig, defineSchema, TinaTemplate } from "tinacms";

const heroBlock : TinaTemplate = {
    name: 'hero',
    label: 'Hero',
    fields: [
        {
            name: 'title',
            label: 'Title',
            type: 'string',
        }
    ]
}

export { heroBlock }