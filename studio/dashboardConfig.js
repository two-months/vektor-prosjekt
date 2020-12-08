export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
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
                  buildHookId: '5fcfd14d379b1d0cc9c75e11',
                  title: 'Sanity Studio',
                  name: 'vektor-prosjekt-studio',
                  apiId: 'ac4c9f67-cb58-43cc-80c1-9ef9104cfe42'
                },
                {
                  buildHookId: '5fcfd14de65e7b009c2b20ce',
                  title: 'Portfolio Website',
                  name: 'vektor-prosjekt',
                  apiId: '4222b653-e107-42e8-97aa-99ce4d5346be'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/two-months/vektor-prosjekt',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://vektor-prosjekt.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
