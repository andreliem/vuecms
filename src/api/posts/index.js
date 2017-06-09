import * as Authors from '@/api/authors'

export function fetch() {
    return [
        {
            id: 1,
            title: 'My First Post',
            slug: 'my-first-post',
            titleShort: 'First Post',
            date: '2017-05-26 13:00:00',
            author: Authors.fetch().shift(),
            keywords: [
                'tutorial',
                'beginner'
            ]
        },
        {
            id: 2,
            title: 'The Second post',
            slug: 'my-second-post',
            titleShort: 'Second Post',
            date: '2017-05-27 13:00:00',
            author: Authors.fetch().shift(),
            keywords: [
                'advanced',
            ]
        }
    ]
}
