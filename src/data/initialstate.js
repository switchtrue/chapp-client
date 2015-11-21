import {fromJS, List, Map} from 'immutable';

export default {
  chapp:  fromJS({
    'user': {
      '_id': '1',
      'name': 'Mike Leonard'
    },
    'availableRooms': [
      {
        '_id':'1',
        'name':'GraphQL',
        'description': 'A room to discuss GraphQL',
        'type': 'topic',
        'participants': [
          {
            '_id':'1',
            'name':'Mike Leonard',
            'email': 'mike.leonard@fivium.co.uk'
          }
        ]
      },
      {
        '_id':'2',
        'name':'Mike, Teighe',
        'description': 'Private chat between Teighe and Mike.',
        'type': 'private',
        'participants': [
          {
            '_id':'1',
            'name':'Mike Leonard',
            'email': 'mike.leonard@fivium.co.uk'
          },
          {
            '_id':'2',
            'name':'Teighe Purnell',
            'email': 'teighe.purnell@fivium.co.uk'
          }
        ]
      }
    ],
    'availablePeople': [
      {
        '_id':'1',
        'name':'Mike Leonard',
        'email': 'mike.leonard@fivium.co.uk',
        'participatingInRooms': [
          {'_id':'1','name':'GraphQL', 'type': 'topic'},
          {'_id':'2','name':'Mike,Teighe', 'type': 'private'}
        ]
      },
      {
        '_id':'2',
        'name':'Teighe Purnell',
        'email': 'teighe.purnell@fivium.co.uk',
        'participatingInRooms': [
          {'_id':'2','name':'Mike,Teighe', 'type': 'private'}
        ]
      },
      {
        '_id':'3',
        'name':'William Friesen',
        'email': 'william.friesen@fivium.co.uk'
      }
    ]
  })
};
