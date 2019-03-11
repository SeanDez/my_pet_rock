import data from '../dummyProductData';
import { searchForDefaultSku } from "../TopDeckSection";

const productData = data[0];

test('searchForDefaultSku', () => {
  
  expect(searchForDefaultSku(productData)).toEqual({
    default: true,
      images: ["../images/dragonglass_pendant3.jpg",
               "../images/dragonglass_pendant4.jpg",
               "../images/dragonglass_pendant5.jpg"],
      options: {Edition: "Standard", Size: "Medium"},
      quantity: 24,
      sku : 3001,
  }
  )
});