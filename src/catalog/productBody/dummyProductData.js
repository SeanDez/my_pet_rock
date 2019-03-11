export default [
  {
    productSlug : 'dragonglassPendant',
    categories : ['Rocks', 'Pet Rocks'],
    brandName : 'DragonStone Trading Company',
    productName : 'Pure DragonGlass, forged from 100% Authentic Dragon Fire',
    shortDescription : ['Forged from the flames of 100% authentic dragon fire, this real pendant could enable your family to live a long, healthy life, or a mindless eternity in the army of the dead should it be misplaced.', 'Imbued with special properties guaranteed to work against White Walkers and Giants. Very limited supply, order before our stock runs out for good!'],
    images : [
      '/images/dragonglass_pendant.jpg',
      '/images/dragonglass_pendant2.jpg',
      '/images/dragonglass_pendant3.jpg',
      '/images/dragonglass_pendant4.jpg',
      '/images/dragonglass_pendant5.jpg',
      '/images/dragonglass_pendant6.jpg',
    ],
    features : [
      'Metal outer covering and neckpiece',
      'Quick pop-out withdrawal mechanism for emergency threats',
      'Optional Premium package includes golden accents'
    ],
    longDescription : [
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus at ducimus eligendi eum fugit impedit in itaque, labore libero necessitatibus optio porro possimus quis quisquam, rerum saepe suscipit temporibus voluptates.',
      'Ad laborum optio possimus quam tempora. Aliquam asperiores consequatur dolorem esse explicabo fuga nulla  officiis, placeat? Commodi debitis dicta ducimus eius labore molestiae officiis, perferendis quasi quis quos ratione rem!',
      'Accusamus aspernatur, blanditiis cum deleniti doloremque illum maiores maxime minus nemo officia omnis qui tempora voluptatem voluptates voluptatibus! Dolorum, illum rem! Accusantium, cumque, laudantium. Aliquid fugit nam pariatur reprehenderit suscipit?'
    ],
    productOptions : [
      { label : 'Edition', selections : ['Standard', 'Premium'] },
      { label : 'Size', selections : ['Small', 'Medium', 'Large'] },
    ],
    // sku, quantity, options, selection,
    skus : [
      {
        sku : 3000,
        quantity : 13,
        images : ["../images/dragonglass_pendant.jpg", "../images/dragonglass_pendant.jpg2"],
        options : {
          Edition : "Standard",
          Size    : "Small",
        },
      }, {
        sku : 3001,
        quantity : 24,
        images : ["../images/dragonglass_pendant3.jpg", "../images/dragonglass_pendant4.jpg", "../images/dragonglass_pendant5.jpg"],
        default : true,
        options : {
          Edition : "Standard",
          Size    : "Medium",
        },
      }, {
        sku : 3002,
        quantity : 34,
        images : ["../images/dragonglass_pendant6.jpg", "../images/dragonglass_pendant.jpg", "../images/dragonglass_pendant4.jpg"],
        options : {
          Edition : "Standard",
          Size    : "Large",
        },
      }, {
        sku : 3003,
        quantity : 3,
        images : ["../images/dragonglass_pendant5.jpg", "../images/dragonglass_pendant2.jpg"],
        options : {
          Edition : "Premium",
          Size    : "Small",
        },
      }, {
        sku : 3004,
        quantity : 2,
        images : ["../images/dragonglass_pendant4.jpg", "../images/dragonglass_pendant5.jpg", "../images/dragonglass_pendant.jpg"],
        options : {
          Edition : "Premium",
          Size    : "Medium",
        },
      }, {
        sku : 3005,
        quantity : 6,
        images : ["../images/dragonglass_pendant3.jpg", "../images/dragonglass_pendant2.jpg", "../images/dragonglass_pendant6.jpg"],
        options : {
          Edition : "Premium",
          Size    : "Large",
        },
      },
    ],
  }
]