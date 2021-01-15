export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '60016f2075dde5d1c9105378',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-iwdsn749',
                  apiId: '13124412-3f9c-4111-8e51-71005d1caf79'
                },
                {
                  buildHookId: '60016f21497efdd88e59368e',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-quvdzacn',
                  apiId: '9cf14511-6c53-431e-b7b1-826af3e267e3'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/maxgerber/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-quvdzacn.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
