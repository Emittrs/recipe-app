import { Injectable } from '@angular/core';

@Injectable()
export class DishService{
  getDishes(){
    return events;
  }
}

const events = [
    	{
        typeOfDish: "Ukwa",
        recipes: [{name: 'yorita',
                  author: 'Kennedy',
                  howTo: 'Aliquam placerat nisl sed urna ullamcorper eleifend. Aliquam blandit gravida mauris, id mollis sem blandit ut. Etiam porttitor leo euismod lorem consequat ullamcorper. Mauris nibh justo, aliquam sit amet velit ut, finibus condimentum lectus. Praesent justo ex, consectetur ut est vitae, mollis pharetra leo. Donec eu ligula et sapien',
                  createdAt: 12345,
                  likes: 45,
                  views: 489
                }
                ],
        history: " justo at lacus. Nulla vehicula sit amet ipsum id ornare. Donec molestie viverra odio. Sed eros dolor, lacinia dapibus varius quis, placerat et risus. Integer nulla lectus, pretium quis vehicula ut, tincidunt vitae urna. Maecenas vitae lacus non mi venenatis hendrerit a quis augue. Praesent accumsan id diam a vulputate. Phasellus quis finibus sapien",
        nutrients: 'gravida mauris, id mollis sem blandit ut. Etiam porttitor leo euismod lorem consequat ullamcorper. Mauris nibh justo',
        createdAt: 56744,
        image: '../../assets/images/jollof_rice.png'

      },
      {
        typeOfDish: "Amala and Ewedu",
        recipes: [{name: 'mimieni',
                  author: 'Nnamid',
                  howTo: 'Aliquam placerat nisl sed urna ullamcorper eleifend. Aliquam blandit gravida mauris, id mollis sem blandit ut. Etiam porttitor leo euismod lorem consequat ullamcorper. Mauris nibh justo, aliquam sit amet velit ut, finibus condimentum lectus. Praesent justo ex, consectetur ut est vitae, mollis pharetra leo. Donec eu ligula et sapien',
                  createdAt: 12345,
                  likes: 45,

                }
                ],
        history: " justo at lacus. Nulla vehicula sit amet ipsum id ornare. Donec molestie viverra odio. Sed eros dolor, lacinia dapibus varius quis, placerat et risus. Integer nulla lectus, pretium quis vehicula ut, tincidunt vitae urna. Maecenas vitae lacus non mi venenatis hendrerit a quis augue. Praesent accumsan id diam a vulputate. Phasellus quis finibus sapien",
        nutrients: 'gravida mauris, id mollis sem blandit ut. Etiam porttitor leo euismod lorem consequat ullamcorper. Mauris nibh justo',
        createdAt: 56744,
        image: '../../assets/images/jollof_rice.png'

      },
      {
        typeOfDish: "Ukwa",
        recipes: [{name: 'Foo',
                  author: 'Andrew',
                  howTo: 'Aliquam placerat nisl sed urna ullamcorper eleifend. Aliquam blandit gravida mauris, id mollis sem blandit ut. Etiam porttitor leo euismod lorem consequat ullamcorper. Mauris nibh justo, aliquam sit amet velit ut, finibus condimentum lectus. Praesent justo ex, consectetur ut est vitae, mollis pharetra leo. Donec eu ligula et sapien',
                  createdAt: 12345,
                  likes: 45,
                  views: 489
                }
                ],
        history: " justo at lacus. Nulla vehicula sit amet ipsum id ornare. Donec molestie viverra odio. Sed eros dolor, lacinia dapibus varius quis, placerat et risus. Integer nulla lectus, pretium quis vehicula ut, tincidunt vitae urna. Maecenas vitae lacus non mi venenatis hendrerit a quis augue. Praesent accumsan id diam a vulputate. Phasellus quis finibus sapien",
        nutrients: 'gravida mauris, id mollis sem blandit ut. Etiam porttitor leo euismod lorem consequat ullamcorper. Mauris nibh justo',
        createdAt: 56744,
        image: '../../assets/images/jollof_rice.png'
      },
      {
        typeOfDish: "Ukwa",
        recipes: [{name: 'Foo',
                  author: 'Andrew',
                  howTo: 'Aliquam placerat nisl sed urna ullamcorper eleifend. Aliquam blandit gravida mauris, id mollis sem blandit ut. Etiam porttitor leo euismod lorem consequat ullamcorper. Mauris nibh justo, aliquam sit amet velit ut, finibus condimentum lectus. Praesent justo ex, consectetur ut est vitae, mollis pharetra leo. Donec eu ligula et sapien',
                  createdAt: 12345,
                  likes: 45,
                  views: 489
                }
                ],
        history: " justo at lacus. Nulla vehicula sit amet ipsum id ornare. Donec molestie viverra odio. Sed eros dolor, lacinia dapibus varius quis, placerat et risus. Integer nulla lectus, pretium quis vehicula ut, tincidunt vitae urna. Maecenas vitae lacus non mi venenatis hendrerit a quis augue. Praesent accumsan id diam a vulputate. Phasellus quis finibus sapien",
        nutrients: 'gravida mauris, id mollis sem blandit ut. Etiam porttitor leo euismod lorem consequat ullamcorper. Mauris nibh justo',
        createdAt: 56744,
        image: '../../assets/images/jollof_rice.png'
      }
    ]
