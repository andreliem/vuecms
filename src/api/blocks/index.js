import * as Authors from '@/api/authors'

export function fetch() {
    return [
        {
            id: 1,
            title: 'Home',
            slug: 'home',
            date: '2017-05-26 13:00:00',
            author: Authors.fetch().shift(),
            keywords: [
                'welcome',
                'home'
            ]
        }
    ]
}
