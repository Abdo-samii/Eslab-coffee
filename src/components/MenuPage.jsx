import React, { useState } from 'react';
import ProductCard from './ProductCard';
import { FaShoppingCart,FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom'; // استخدام history للتنقل بين الصفحات
const MenuPage = () => {
  const [activeCategory, setActiveCategory] = useState(null);
  const [cart, setCart] = useState([]);
  const [isCheckoutEnabled, setCheckoutEnabled] = useState(false);
  const [isCartOpen, setCartOpen] = useState(false); // لحالة فتح وإغلاق السلة
  const navigate = useNavigate();

  const toggleCategory = (category) => {
    setActiveCategory(activeCategory === category ? null : category);
  };

  const addToCart = (product) => {
    setCart([...cart, product]);
    setCheckoutEnabled(true);
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter((product) => product.id !== productId));
  };

  const proceedToCheckout = () => {
    navigate('/checkout');
  };

  // بيانات المنتجات من الموقع مع التصنيف الخاص بكل منتج
  const products = [
    
    // مشروبات قهوة
    {
      id: 1,
      title: 'Iced Spanish Latte',
      description: 'The perfect balance of sweetened condensed milk and our fresh roasted espresso.',
      price: 'EGP 110',
      image: 'https://images.deliveryhero.io/image/talabat/Menuitems/iced_spanish_latte638302878519386682.jpg?width=172&height=172',
      category: 'Picks for you 🔥'
    },
    {
      id: 2,
      title: 'Cappuccino',
      description: 'Made with espresso and steamed milk creating rich, velvety taste.',
      price: 'EGP 90',
      image: 'https://images.deliveryhero.io/image/talabat/Menuitems/Cappuccino_638386715306168375?width=172&amp;height=172',
      category: 'Picks for you 🔥'
    },
    {
      id: 3,
      title: 'Iced White Mocha',
      description: 'Fusion of smooth white chocolate, bold espresso, and chilled milk.',
      price: 'EGP 115',
      image: 'https://images.deliveryhero.io/image/talabat/Menuitems/iced_white_mocha638385852271026614.jpg?width=172&amp;height=172',
      category: 'Picks for you 🔥'
    },  {
      id: 4,
      title: 'Smoked Turkey Sandwich',
      description: 'Turkey slices, cheese, tomatoes and lettuce served in freshly baked bread.',
      price: 'EGP 115',
      image: 'https://images.deliveryhero.io/image/talabat/Menuitems/turkey_637327686899356979.jpg?width=172&amp;height=172',
      category: 'Picks for you 🔥'
    },  {
      id: 5,
      title: 'Coffee Esfrappa',
      description: 'Fusion of smooth white chocolate, bold espresso, and chilled milk.',
      price: 'EGP 100',
      image: 'https://images.deliveryhero.io/image/talabat/Menuitems/coffee_esfappa638385848178554496.jpg?width=172&amp;height=172',
      category: 'Picks for you 🔥'
    },  {
      id: 6,
      title: 'Iced White Mocha',
      description: 'Fusion of smooth white chocolate, bold espresso, and chilled milk.',
      price: 'EGP 110',
      image: 'https://images.deliveryhero.io/image/talabat/Menuitems/iced_white_mocha638385852271026614.jpg?width=172&amp;height=172',
      category: 'Picks for you 🔥'
    },
    // مشروبات باردة
    {
      id: 7,
      title: 'Passion Fruit Lemonade',
      description: 'A refreshing blend of espresso and chilled milk served over ice.',
      price: 'EGP 80',
      image: 'https://www.talabat.com/assets/images/img-placeholder.svg',
      category: 'Summer Drinks'
    }, {
      id: 8,
      title: 'Classic Mojito Lemon',
      description: 'A refreshing blend of espresso and chilled milk served over ice.',
      price: 'EGP 130',
      image: 'https://www.talabat.com/assets/images/img-placeholder.svg',
      category: 'Summer Drinks'
    }, {
      id: 9,
      title: 'Mojito Bluberry',
      description: 'A refreshing blend of espresso and chilled milk served over ice.',
      price: 'EGP 85',
      image: 'https://www.talabat.com/assets/images/img-placeholder.svg',
      category: 'Summer Drinks'
    },{
      id: 10,
      title: 'Strawberry Lemonade',
      description: 'A combination of the tangy taste of fresh lemons with the sweet and juicy flavors of strawberries.',
      price: 'EGP 90',
      image: 'https://images.deliveryhero.io/image/talabat/Menuitems/_Strawberry_Lemonade_638228714789819216.jpg?width=172&amp;height=172',
      category: 'Summer Drinks'
    },{
      id: 11,
      title: 'Mojito Blue Curacao',
      description: 'A combination of the tangy taste of fresh lemons with the sweet and juicy flavors of strawberries.',
      price: 'EGP 160',
      image: 'https://www.talabat.com/assets/images/img-placeholder.svg',
      category: 'Summer Drinks'
    },
    // Louts Esfrappe
    {
      id: 12,
      title: 'Louts Esfrappe',
      description: 'Espresso poured over a scoop of vanilla ice cream for a sweet finish.',
      price: 'EGP 120',
      image: 'https://www.talabat.com/assets/images/img-placeholder.svg',
      category: 'Iced Blend Esfrappa'
    },    {
      id: 13,
      title: 'Mocha Esfrappe',
      description: 'Espresso poured over a scoop of vanilla ice cream for a sweet finish.',
      price: 'EGP 110',
      image: 'https://images.deliveryhero.io/image/talabat/Menuitems/mocha_esfrappa638385848125906143.jpg?width=172&amp;height=172',
      category: 'Iced Blend Esfrappa'
    },    {
      id: 14,
      title: 'Coffee Esfrappa',
      description: 'Espresso poured over a scoop of vanilla ice cream for a sweet finish.',
      price: 'EGP 100',
      image: 'https://images.deliveryhero.io/image/talabat/Menuitems/coffee_esfappa638385848178554496.jpg?width=172&amp;height=172',
      category: 'Iced Blend Esfrappa'
    },    {
      id: 15,
      title: 'White Mocha Esfrappa',
      description: 'Espresso poured over a scoop of vanilla ice cream for a sweet finish.',
      price: 'EGP 120',
      image: 'https://images.deliveryhero.io/image/talabat/Menuitems/white_mocha_esfrappa638385848254400109.jpg?width=172&amp;height=172',
      category: 'Iced Blend Esfrappa'
    },    {
      id: 16,
      title: 'Chocolate Drop Esfrappa',
      description: 'Small chunks of sweetened chocolate, rich and creamy taste blended with milk, and coffee Espresso.',
      price: 'EGP 120',
      image: 'https://images.deliveryhero.io/image/talabat/Menuitems/Chocolate_Drop_Esfrappe638228714713775910.jpg?width=172&amp;height=172',
      category: 'Iced Blend Esfrappa'
    },    {
      id: 17,
      title: 'Caramel Esfrappa',
      description: 'Espresso poured over a scoop of vanilla ice cream for a sweet finish.',
      price: 'EGP 120',
      image: 'https://images.deliveryhero.io/image/talabat/Menuitems/cramael_esfrappa638385848350773896.jpg?width=172&amp;height=172',
      category: 'Iced Blend Esfrappa'
    },    {
      id: 18,
      title: 'Vanilla Esfrappa',
      description: 'A rich vanilla flavor, a hint of coffee blended with ice and milk.',
      price: 'EGP 120',
      image: 'https://images.deliveryhero.io/image/talabat/Menuitems/vanlia_essfrappa638313115452460420.jpg?width=172&amp;height=172',
      category: 'Iced Blend Esfrappa'
    },
    // Juices
    {
      id: 19,
      title: 'Mango Juice',
      price: 'EGP 75',
      image: 'https://images.deliveryhero.io/image/talabat/Menuitems/Mango_Juice_Romel_gerges_638385849563035522.jpg?width=172&amp;height=172',
      category: 'Juices'
    }, {
      id: 20,
      title: 'Orange Juice',
      price: 'EGP 70',
      image: 'https://images.deliveryhero.io/image/talabat/Menuitems/Orange_Juice_Romel_gerges638385849619164521.jpg?width=172&amp;height=172',
      category: 'Juices'
    }, {
      id: 21,
      title: 'Guava Juice',
      price: 'EGP 70',
      image: 'https://images.deliveryhero.io/image/talabat/Menuitems/Guava_Juice_Romel_gerges_638385849683891067.jpg?width=172&amp;height=172',
      category: 'Juices'
    },
    // Milk Blend
    {
      id: 22,
      title: 'Peach Milk Blend',
      description: 'Rich peach flavor, vanilla Base, with ice and milk.',
      price: 'EGP 150',
      image: 'https://images.deliveryhero.io/image/talabat/Menuitems/paech_milk_blend638313115355431711.jpg?width=172&amp;height=172',
      category: 'Milk Blend'
    },{
      id: 23,
      title: 'Strawberry Milk Blend',
      description: 'A rich strawberry flavor, Vanilla Base , with ice and milk.',
      price: 'EGP 150',
      image: 'https://images.deliveryhero.io/image/talabat/Menuitems/Banana_Strawberry_Juice638288353569918776.jpg?width=172&amp;height=172',
      category: 'Milk Blend'
    },{
      id: 24,
      title: 'Lotus Milk Blend',
      description: 'The famous Lotus Biscoff spread mixed with milk and Lotus biscuit crumbs.',
      price: 'EGP 150',
      image: 'https://images.deliveryhero.io/image/talabat/Menuitems/lotus_milk_blend638313150627182645.jpg?width=172&amp;height=172',
      category: 'Milk Blend'
    },{
      id: 25,
      title: 'Chocolate Chips Milk Blend',
      price: 'EGP 150',
      image: 'https://images.deliveryhero.io/image/talabat/Menuitems/Espressolab_Chocolate_Chi638428943491805181.jpg?width=172&amp;height=172',
      category: 'Milk Blend'
    },
     // Coffee
     {
      id: 26,
      title: 'AeroPress Colombia',
      description: 'A clean taste with clearly defined flavor notes',
      price: 'EGP 95',
      image: 'https://images.deliveryhero.io/image/talabat/Menuitems/red_aeropressjpeg638228663506590891.jpg?width=172&amp;height=172',
      category: 'Coffee'
    },{
      id: 27,
      title: 'Turkish Coffee',
      description: 'Turkish coffee is a traditional method of preparing coffee that originated in Turkey.',
      price: 'EGP 50',
      image: 'https://images.deliveryhero.io/image/talabat/Menuitems/Turkish638228714831485694.jpg?width=172&amp;height=172',
      category: 'Coffee'
    },
    // Iced Coffee
    {
      id: 28,
      title: 'Iced Lotus Latte',
      description: 'coffee drink made with espresso, lotus, milk and ice',
      price: 'EGP 130',
      image: 'https://images.deliveryhero.io/image/talabat/Menuitems/iced_lutes_latte638385852125647797.jpg?width=172&amp;height=172',
      category: 'Iced Coffee'
    }, {
      id: 29,
      title: 'Iced White Mocha',
      description: 'Fusion of smooth white chocolate, bold espresso, and chilled milk',
      price: 'EGP 115',
      image: 'https://images.deliveryhero.io/image/talabat/Menuitems/iced_white_mocha638385852271026614.jpg?width=172&amp;height=172',
      category: 'Iced Coffee'
    }, {
      id: 30,
      title: 'Iced Salted Caramel Latte',
      description: 'espresso, steamed milk, and salted caramel syrup',
      price: 'EGP 130',
      image: 'https://images.deliveryhero.io/image/talabat/Menuitems/iced_salted_caramel_latte638385852601007049.jpg?width=172&amp;height=172',
      category: 'Iced Coffee'
    }, {
      id: 31,
      title: 'Iced Caffe Mocha',
      description: 'Coffee, chocolate, mocha sauce, milk, ice',
      price: 'EGP 115',
      image: 'https://images.deliveryhero.io/image/talabat/Menuitems/iced_caffe_mocha638385852464971855.jpg?width=172&amp;height=172',
      category: 'Iced Coffee'
    }, {
      id: 32,
      title: 'Iced Caffe Latte',
      description: 'Espresso ,Sugar, syrup, milk, Ice cubes and water',
      price: 'EGP 100',
      image: 'https://images.deliveryhero.io/image/talabat/Menuitems/Iced_Caffe_Latte638385853471136560.jpg?width=172&amp;height=172',
      category: 'Iced Coffee'
    }, {
      id: 33,
      title: 'Iced Spanish Latte',
      description: 'The perfect balance of sweetened condensed milk and our fresh roasted espresso.',
      price: 'EGP 110',
      image: 'https://images.deliveryhero.io/image/talabat/Menuitems/iced_spanish_latte638302878519386682.jpg?width=172&amp;height=172',
      category: 'Iced Coffee'
    }, {
      id: 34,
      title: 'Iced Vanilla Latte',
      description: 'Our fresh roasted espresso poured over ice and Vanilla syrup',
      price: 'EGP 110',
      image: 'https://images.deliveryhero.io/image/talabat/Menuitems/2102020Icedvanilla_Latte1638228714798516179.jpg?width=172&amp;height=172',
      category: 'Iced Coffee'
    }, {
      id: 35,
      title: 'Ice American',
      price: 'EGP 85',
      image: 'https://images.deliveryhero.io/image/talabat/Menuitems/iced_caffe_americano638385853967475446.jpg?width=172&amp;height=172',
      category: 'Iced Coffee'
    }, {
      id: 36,
      title: 'Iced Carmel Latte',
      description: 'Our fresh roasted espresso poured over ice and Caramel syrup',
      price: 'EGP 110',
      image: 'https://images.deliveryhero.io/image/talabat/Menuitems/Iced_caramel638228663672878120.jpg?width=172&amp;height=172',
      category: 'Iced Coffee'
    }, {
      id: 37,
      title: 'Iced Hazelnut Latte',
      description: 'Iced latte with hazelnut flavoring.',
      price: 'EGP 110',
      image: 'https://images.deliveryhero.io/image/talabat/Menuitems/Iced_Hazelnut_Latte_Romel638385854686128224.jpg?width=172&amp;height=172',
      category: 'Iced Coffee'
    },
    //Signature
    {
      id: 38,
      title: 'Hot Double Impact Latte',
      price: 'EGP 110',
      image: 'https://images.deliveryhero.io/image/talabat/Menuitems/hot_double_impact_latte638385855042544786.jpg?width=172&amp;height=172',
      category: 'Signature'
    }, {
      id: 39,
      title: 'Iced Shaken Double Impact',
      price: 'EGP 110',
      image: 'https://images.deliveryhero.io/image/talabat/Menuitems/iced_shaken_double_impact638385855172090288.jpg?width=172&amp;height=172',
      category: 'Signature'
    }, {
      id: 40,
      title: 'Iced Spanish Latte Bottle',
      price: 'EGP 110',
      image: 'https://images.deliveryhero.io/image/talabat/Menuitems/spanish_latte_bottle638302878525442019.jpg?width=172&amp;height=172',
      category: 'Signature'
    },
     //Cold Brew Bottle
     {
      id: 41,
      title: 'Cold Brew Bottle',
      description: 'Chilled coffee made from grounds that have been steeped in cold water for several hours.',
      price: 'EGP 95',
      image: 'https://images.deliveryhero.io/image/talabat/Menuitems/cold_brew_bottle638302878522703411.jpg?width=172&amp;height=172',
      category: 'Cold Brew'
    },
      //Matcha
      {
        id: 42,
        title: 'Matcha Milk Blend',
        description: 'Matcha Milk Tea Blend.',
        price: 'EGP 150',
        image: 'https://www.talabat.com/assets/images/img-placeholder.svg',
        category: 'Matcha'
      },{
        id: 43,
        title: 'Matcha Latte',
        description: 'Latte made with matcha green tea powder.',
        price: 'EGP 120',
        image: 'https://images.deliveryhero.io/image/talabat/Menuitems/Espressolab_Matcha_Latte_638428943505657923.jpg?width=172&amp;height=172',
        category: 'Matcha'
      },
      //Tea
      {
        id: 44,
        title: 'English Breakfast tea',
        description: 'A blend of black teas.',
        price: 'EGP 50',
        image: 'https://images.deliveryhero.io/image/talabat/Menuitems/Espressolab_English_Break638428943505760979.jpg?width=172&amp;height=172',
        category: 'Tea'
      },
      //Latte
      {
        id: 45,
        title: 'Hot Caffe Latte',
        description: 'classic coffee drink made with espresso and steamed milk',
        price: 'EGP 110',
        image: 'https://images.deliveryhero.io/image/talabat/Menuitems/hot_caffe_latte638385856325673213.jpg?width=172&amp;height=172',
        category: 'Latte'
      },{
        id: 46,
        title: 'Hot Caramel Latte',
        description: 'A hot latte with caramel.',
        price: 'EGP 110',
        image: 'https://images.deliveryhero.io/image/talabat/Menuitems/Hot_Caramel_Latte_638386733867618706?width=172&amp;height=172',
        category: 'Latte'
      },{
        id: 47,
        title: 'Hot Salted Caramel Latte',
        description: 'Latte made with espresso, steamed milk, salted caramel syrup, and a sprinkle of sea salt.',
        price: 'EGP 110',
        image: 'https://images.deliveryhero.io/image/talabat/Menuitems/Espressolab_Hot_Salted_Ca638428943505394490.jpg?width=172&amp;height=172',
        category: 'Latte'
      },{
        id: 48,
        title: 'Hot Caffe Mocha',
        price: 'EGP 110',
        image: 'https://images.deliveryhero.io/image/talabat/Menuitems/Espressolab_Hot_Caffe_Moc638428943501759752.jpg?width=172&amp;height=172',
        category: 'Latte'
      },{
        id: 49,
        title: 'White Mocha',
        description: 'Made with espresso shots, steamed milk and velvety whipped cream',
        price: 'EGP 110',
        image: 'https://images.deliveryhero.io/image/talabat/Menuitems/white_mocha638385856935512572.jpg?width=172&amp;height=172',
        category: 'Latte'
      },{
        id: 50,
        title: 'Hot Spanish Latte',
        description: 'Spanish latte is a coffee made with espresso, steamed milk, and condensed milk, giving it a slightly sweeter taste compared to a regular latte.',
        price: 'EGP 110',
        image: 'https://images.deliveryhero.io/image/talabat/Menuitems/Hot_Spanish_Latte_638386725478490571?width=172&amp;height=172',
        category: 'Latte'
      },{
        id: 51,
        title: 'Hot Lotus Latte',
        description: 'coffee drink made with espresso, steamed milk, and lotus flavor.',
        price: 'EGP 110',
        image: 'https://images.deliveryhero.io/image/talabat/Menuitems/hot_lotus_latte638385857044672521.jpg?width=172&amp;height=172',
        category: 'Latte'
      },{
        id: 52,
        title: 'Hot Vanilla Latte',
        description: 'espresso, steamed milk, and vanilla syrup',
        price: 'EGP 110',
        image: 'https://images.deliveryhero.io/image/talabat/Menuitems/vanilla_hot638228714723091051.jpg?width=172&amp;height=172',
        category: 'Latte'
      },{
        id: 53,
        title: 'Hot Hazelnut latte',
        description: 'Our fresh roasted espresso double shots mixed Hazelnut Syrup and steamed milk and a thin layer of foamed creamy milk',
        price: 'EGP 110',
        image: 'https://images.deliveryhero.io/image/talabat/Menuitems/hazelnut638228714782703363.jpg?width=172&amp;height=172',
        category: 'Latte'
      },
      //Espresso
      {
        id: 54,
        title: 'Espresso',
        description: 'Our famous roasted with passion espresso.',
        price: 'EGP 70',
        image: 'https://images.deliveryhero.io/image/talabat/Menuitems/esspresso_638302878515842157.jpg?width=172&amp;height=172',
        category: 'Espresso'
      },{
        id: 55,
        title: 'Iced Caramel Macchiato',
        description: 'Our fresh roasted espresso poured over ice, caramel sauce and milk',
        price: 'EGP 110',
        image: 'https://images.deliveryhero.io/image/talabat/Menuitems/ices_caramel_macchiato638302878524816617.jpg?width=172&amp;height=172',
        category: 'Espresso'
      },{
        id: 56,
        title: 'Hot Caffe Americano',
        price: 'EGP 95',
        image: 'https://images.deliveryhero.io/image/talabat/Menuitems/hot_caffe_americano638385857741421504.jpg?width=172&amp;height=172',
        category: 'Espresso'
      },{
        id: 57,
        title: 'Hot Caramel Macchiato',
        description: 'coffee with caramel and milk.',
        price: 'EGP 105',
        image: 'https://images.deliveryhero.io/image/talabat/Menuitems/hot_caramel_macchiato638385857889622098.jpg?width=172&amp;height=172',
        category: 'Espresso'
      },{
        id: 58,
        title: 'Cappuccino',
        description: 'Made with espresso and steamed milk creating rich, velvety taste.',
        price: 'EGP 90',
        image: 'https://images.deliveryhero.io/image/talabat/Menuitems/Cappuccino_638386715306168375?width=172&amp;height=172',
        category: 'Espresso'
      },{
        id: 59,
        title: 'Espresso Macchiato',
        description: 'Our fresh roasted espresso marked with Macchiato stain of foamed milk.',
        price: 'EGP 70',
        image: 'https://images.deliveryhero.io/image/talabat/Menuitems/espresso_macchiato638302881502334376.jpg?width=172&amp;height=172',
        category: 'Espresso'
      },{
        id: 60,
        title: 'Cortado',
        description: 'Our fresh roasted coffee mixed with an equal amount of steamed milk',
        price: 'EGP 75',
        image: 'https://images.deliveryhero.io/image/talabat/Menuitems/cortado638313115385230546.jpg?width=172&amp;height=172',
        category: 'Espresso'
      },{
        id: 61,
        title: 'Flat White',
        description: 'Double shot of our fresh roasted espresso with a thin layer of micro foamed milk.',
        price: 'EGP 85',
        image: 'https://images.deliveryhero.io/image/talabat/Menuitems/flat_white638302878505179996.jpg?width=172&amp;height=172',
        category: 'Espresso'
      },
      //Chocolate
      {
        id: 62,
        title: 'Caramel Hot Chocolate',
        description: 'Milk, Caramel sauce, hot Chocolate',
        price: 'EGP 110',
        image: 'https://images.deliveryhero.io/image/talabat/Menuitems/Espressolab_Caramel_Hot_C638428943495420478.jpg?width=172&amp;height=172',
        category: 'Chocolate'
      },{
        id: 63,
        title: 'Hazelnut Hot Chocolate',
        description: 'Hot chocolate infused with hazelnut essence.',
        price: 'EGP 110',
        image: 'https://images.deliveryhero.io/image/talabat/Menuitems/Espressolab_Caramel_Hot_C638428943495420478.jpg?width=172&amp;height=172',
        category: 'Chocolate'
      },{
        id: 64,
        title: 'Hot Chocolate Brulee',
        description: 'Crème Brulée hot chocolate less sugar, more chocolate with milk is the magic of our blend, and the base for our flavored Hot Chocolates.',
        price: 'EGP 110',
        image: 'https://images.deliveryhero.io/image/talabat/Menuitems/creme_brulee_hot_chocolat638228663668972936.jpg?width=172&amp;height=172',
        category: 'Chocolate'
      },{
        id: 65,
        title: 'Hazelnut Iced Chocolate',
        price: 'EGP 110',
        image: 'https://images.deliveryhero.io/image/talabat/Menuitems/Espressolab_Hazelnut_Iced638428943505362480.jpg?width=172&amp;height=172',
        category: 'Chocolate'
      },{
        id: 66,
        title: 'Caramel Iced Chocolate',
        price: 'EGP 110',
        image: 'https://images.deliveryhero.io/image/talabat/Menuitems/Caramel_Iced_Chocolate_Ro638385859106728718.jpg?width=172&amp;height=172',
        category: 'Chocolate'
      },{
        id: 67,
        title: 'Vanilla Hot Chocolate',
        price: 'EGP 110',
        image: 'https://www.talabat.com/assets/images/img-placeholder.svg',
        category: 'Chocolate'
      },{
        id: 68,
        title: 'White Iced Chocolate',
        description: 'An indulgent and rich creamy white chocolate heavenly iced drink.',
        price: 'EGP 110',
        image: 'https://images.deliveryhero.io/image/talabat/Menuitems/Espressolab_White_Iced_Ch638428943497807162.jpg?width=172&amp;height=172',
        category: 'Chocolate'
      },{
        id: 69,
        title: 'Vanilla Iced Chocolate',
        price: 'EGP 110',
        image: 'https://www.talabat.com/assets/images/img-placeholder.svg',
        category: 'Chocolate'
      },{
        id: 70,
        title: 'Hot Chocolate',
        description: 'A unique blend of hot chocolate made with premium cocoa beans, a touch of sugar, and milk, creating a delightful and irresistible classic flavor.',
        price: 'EGP 100',
        image: 'https://images.deliveryhero.io/image/talabat/Menuitems/Hot_Chocolate_638386715448301987?width=172&amp;height=172',
        category: 'Chocolate'
      },{
        id: 69,
        title: 'Hot White Chocolate',
        description: 'White chocolate hot drinks mix adds a unique twist to your beloved chocolate beverage. Enjoy a cozy cup of creamy white chocolate crafted with fresh milk.',
        price: 'EGP 110',
        image: 'https://images.deliveryhero.io/image/talabat/Menuitems/Espressolab_Hot_White_Cho638428943496833272.jpg?width=172&amp;height=172',
        category: 'Chocolate'
      },
      //Soft Drinks
      {
        id: 70,
        title: 'Puvana Sparkling Water',
        description: 'Sparkling water from Puvana.',
        price: 'EGP 50',
        image: 'https://www.talabat.com/assets/images/img-placeholder.svg',
        category: 'Soft Drinks'
      },{
        id: 71,
        title: 'Puvana Water',
        description: 'small',
        price: 'EGP 25',
        image: 'https://images.deliveryhero.io/image/talabat/Menuitems/mmw_638530182716318910?width=172&amp;height=172',
        category: 'Soft Drinks'
                },
          //Dessert
          {
            id: 72,
            title: 'Eclair Flavored with Almonds and Lemon',
            price: 'EGP 70',
            image: 'https://www.talabat.com/assets/images/img-placeholder.svg',
            category: 'Dessert'
          },{
            id: 73,
            title: 'Pistachio Eclair',
            price: 'EGP 110',
            image: 'https://www.talabat.com/assets/images/img-placeholder.svg',
            category: 'Dessert'
          },{
            id: 74,
            title: 'Hazelnut Cream Paris Brest',
            price: 'EGP 85',
            image: 'https://www.talabat.com/assets/images/img-placeholder.svg',
            category: 'Dessert'
          },{
            id: 75,
            title: 'Brownies',
            description: 'Rich and fudgy chocolate squares, perfect for indulging in a sweet treat.',
            price: 'EGP 95',
            image: 'https://images.deliveryhero.io/image/talabat/Menuitems/brownies638313115542705916.jpg?width=172&amp;height=172',
            category: 'Dessert'
          },{
            id: 76,
            title: 'San Sebastian',
            description: 'A dessert named after the city in Spain, typically referring to a creamy and custard-like dessert topped with caramelized sugar.',
            price: 'EGP 125',
            image: 'https://images.deliveryhero.io/image/talabat/Menuitems/sansebastiansitebuyuk638302054718354692.jpeg?width=172&amp;height=172',
            category: 'Dessert'
          },{
            id: 77,
            title: 'Donut Nutella',
            price: 'EGP 55',
            image: 'https://images.deliveryhero.io/image/talabat/Menuitems/nutella_donut638228714724817675.jpg?width=172&amp;height=172',
            category: 'Dessert'
          },{
            id: 78,
            title: 'Banana Bread',
            description: 'A delicious dessert that combines the classic taste of a traditional English cake with the sweet and creamy flavor of ripe bananas.',
            price: 'EGP 50',
            image: 'https://images.deliveryhero.io/image/talabat/Menuitems/Espressolab_Banana_Bread_638428943508072464.jpg?width=172&amp;height=172',
            category: 'Dessert'
          },{
            id: 79,
            title: 'Vanilla Muffin',
            description: 'Muffin cake with vanilla',
            price: 'EGP 50',
            image: 'https://images.deliveryhero.io/image/talabat/Menuitems/Vanilla_Muffin_637332809015042424.jpg?width=172&amp;height=172',
            category: 'Dessert'
          },{
            id: 80,
            title: 'Chocolate Chips Cookie',
            description: 'Fresh Baked Cookies with Chocolate Chips',
            price: 'EGP 60',
            image: 'https://images.deliveryhero.io/image/talabat/Menuitems/chocolate_chips_cookie638313115492625372.jpg?width=172&amp;height=172',
            category: 'Dessert'
          },{
            id: 81,
            title: 'Double Chocolate Cookie',
            description: 'Fresh baked chocolate cookie dough with chocolate chips.',
            price: 'EGP 65',
            image: 'https://images.deliveryhero.io/image/talabat/Menuitems/double_chocolate_cookie638313115449802806.jpg?width=172&amp;height=172',
            category: 'Dessert'
          },{
            id: 82,
            title: 'Oats And Raisin Cookies',
            description: 'Freshly baked cookie mixed with oats and raisins.',
            price: 'EGP 65',
            image: 'https://images.deliveryhero.io/image/talabat/Menuitems/oats_and_raisin_cookies638313115516354115.jpg?width=172&amp;height=172',
            category: 'Dessert'
          },{
            id: 83,
            title: 'Banana Roll',
            description: 'Sponge cake stuffed with pastry cream and whole bananas.',
            price: 'EGP 95',
            image: 'https://images.deliveryhero.io/image/talabat/Menuitems/banana__roll638313115531381640.jpg?width=172&amp;height=172',
            category: 'Dessert'
          },{
            id: 83,
            title: 'Banana Puff',
            price: 'EGP 120',
            image: 'https://images.deliveryhero.io/image/talabat/Menuitems/mmw_638154577195428772?width=172&amp;height=172',
            category: 'Dessert'
          },
          //Sandwiches
          {
            id: 84,
            title: 'Grilled Chicken Sandwich.',
            description: 'Sponge cake stuffed with pastry cream and whole bananas.',
            price: 'EGP 115',
            image: 'https://www.talabat.com/assets/images/img-placeholder.svg',
            category: 'Sandwiches'
          },{
            id: 85,
            title: 'Roast Beef Sandwich',
            description: 'Roast beef slices, emmental cheese and lettuce served in white bread.',
            price: 'EGP 100',
            image: 'https://images.deliveryhero.io/image/talabat/Menuitems/roast_beef_637111417288072743.jpg?width=172&amp;height=172',
            category: 'Sandwiches'
          },{
            id: 86,
            title: 'Mix Basil Sandwich',
            description: 'Cheddar cheese, roumy cheese, mozzarella cheese and served in panini bread.',
            price: 'EGP 100',
            image: 'https://images.deliveryhero.io/image/talabat/Menuitems/Espressolab_Mix_Basil_San638428943513495585.jpg?width=172&amp;height=172',
            category: 'Sandwiches'
          },{
            id: 87,
            title: 'Turkish Sausage Sandwich',
            description: 'Italian sausages served in freshly baked bread',
            price: 'EGP 115',
            image: 'https://images.deliveryhero.io/image/talabat/Menuitems/blob_637814100684453628?width=172&amp;height=172',
            category: 'Sandwiches'
          },{
            id: 88,
            title: 'Focaccia Chicken Sandwich',
            description: 'Marinated chicken served in olive oil rich foccacia bread.',
            price: 'EGP 115',
            image: 'https://images.deliveryhero.io/image/talabat/Menuitems/Espressolab_Focaccia_Chic638428943513879274.jpg?width=172&amp;height=172',
            category: 'Sandwiches'
          },{
            id: 89,
            title: 'Smoked Turkey Sandwich',
            description: 'Turkey slices, cheese, tomatoes and lettuce served in freshly baked bread..',
            price: 'EGP 90',
            image: 'https://images.deliveryhero.io/image/talabat/Menuitems/turkey_637327686899356979.jpg?width=172&amp;height=172',
            category: 'Sandwiches'
          },{
            id: 90,
            title: 'Tuna Sandwich',
            description: 'Fresh tuna fish chunks mixed with mayonnaise and olives served in freshly baked brown bread.',
            price: 'EGP 115',
            image: 'https://images.deliveryhero.io/image/talabat/Menuitems/Tuna_Sandwich_637332809009186816.jpg?width=172&amp;height=172',
            category: 'Sandwiches'
          },{
            id: 91,
            title: 'Grilled Chicken Sandwich',
            description: 'Made with tender and perfectly seasoned chicken, crisp lettuce, ripe tomato, and creamy mayonnaise, all nestled between two slices of freshly baked bread..',
            price: 'EGP 115',
            image: 'https://images.deliveryhero.io/image/talabat/Menuitems/grilled_chicken_637327686930070281.jpg?width=172&amp;height=172',
            category: 'Sandwiches'
          },{
            id: 92,
            title: 'Mix Cheese Sandwich',
            description: 'Cheddar cheese, roumi cheese and mozzarella cheese, served in panini bread.',
            price: 'EGP 100',
            image: 'https://images.deliveryhero.io/image/talabat/Menuitems/Mix_Cheese_637327686943712999.jpg?width=172&amp;height=172',
            category: 'Sandwiches'
          },{
            id: 93,
            title: 'Chicken Tandoori Sandwich',
            description: 'Grilled chicken sandwich made in tandoori style with spice',
            price: 'EGP 115',
            image: 'https://images.deliveryhero.io/image/talabat/Menuitems/Espressolab_Chicken_Tando638428943513923420.jpg?width=172&amp;height=172',
            category: 'Sandwiches'
          },
          //Cheesecake
          {
            id: 94,
            title: 'Cheese Cake Blueberry',
            price: 'EGP 125',
            image: 'https://www.talabat.com/assets/images/img-placeholder.svg',
            category: 'Cheesecake'
          },{
            id: 95,
            title: 'Oreo Cheesecake',
            description: 'creamy with buttery crust cheesecake, with a touch of Oreo biscuits.',
            price: 'EGP 125',
            image: 'https://images.deliveryhero.io/image/talabat/Menuitems/oreo_cheese_cake638313115540581375.jpg?width=172&amp;height=172',
            category: 'Cheesecake'
          },{
            id: 96,
            title: 'Snickers Cheesecake',
            description: 'Chocolatey, creamy with buttery crust cheesecake, for snickers chocolate lovers..',
            price: 'EGP 125',
            image: 'https://images.deliveryhero.io/image/talabat/Menuitems/snickers_cheesecake638313115541960580.jpg?width=172&amp;height=172',
            category: 'Cheesecake'
          },{
            id: 97,
            title: 'Raspberry Cheesecake',
            description: 'rich with crunchy crust cheesecake, with berries sweetness.',
            price: 'EGP 125',
            image: 'https://images.deliveryhero.io/image/talabat/Menuitems/raspberry_chessecake638313115534745889.jpg?width=172&amp;height=172',
            category: 'Cheesecake'
          },{
            id: 98,
            title: 'Caramel Cheesecake',
            description: 'Creamy with buttery crust cheesecake, with a caramel flavor.',
            price: 'EGP 125',
            image: 'https://images.deliveryhero.io/image/talabat/Menuitems/caramel_cheese_cake638313115533472364.jpg?width=172&amp;height=172',
            category: 'Cheesecake'
          },{
            id: 99,
            title: 'Lotus Cheesecake',
            description: 'Out of this world lotus lovers creamy cheesecake',
            price: 'EGP 125',
            image: 'https://images.deliveryhero.io/image/talabat/Menuitems/lotus_cheesecake638313115540876651.jpg?width=172&amp;height=172',
            category: 'Cheesecake'
          },{
            id: 100,
            title: 'Nutella Cheesecake',
            description: 'Nutella indulged with cream cheese on a crispy biscuit base.',
            price: 'EGP 125',
            image: 'https://images.deliveryhero.io/image/talabat/Menuitems/nutella_cheesecake638313115541797607.jpg?width=172&amp;height=172',
            category: 'Cheesecake'
          },
          //Grab and Go
          {
            id: 101,
            title: 'Brazillian Coffee 250 Gr',
            price: 'EGP 125',
            image: 'https://www.talabat.com/assets/images/img-placeholder.svg',
            category: 'Grab and Go'
          },{
            id: 102,
            title: 'Chocolate Waffle',
            price: 'EGP 20',
            image: 'https://images.deliveryhero.io/image/talabat/Menuitems/chocolate_waffle638313115491639369.jpg?width=172&amp;height=172',
            category: 'Grab and Go'
          },
          //Bakeries
          {
            id: 103,
            title: 'Mix Croissant (Beef&turky)',
            price: 'EGP 85',
            image: 'https://www.talabat.com/assets/images/img-placeholder.svg',
            category: 'Bakeries'
          },
          //At Home
          {
            id: 104,
            title: 'Coffee Capsules Colombia',
            price: 'EGP 340',
            image: 'https://images.deliveryhero.io/image/talabat/Menuitems/Espressolab_Coffee_Capsul638428943479431552.jpg?width=172&amp;height=172',
            category: 'At Home'
          },{
            id: 105,
            title: 'Coffee Capsules ( Ethiopia Sidamo )',
            price: 'EGP 340',
            image: 'https://images.deliveryhero.io/image/talabat/Menuitems/Espressolab_Coffee_Capsul638428943480414212.jpg?width=172&amp;height=172',
            category: 'At Home'
          },{
            id: 106,
            title: 'Coffee Capsules (Kenya)',
            price: 'EGP 340',
            image: 'https://images.deliveryhero.io/image/talabat/Menuitems/Espressolab_Coffee_Capsul638428943484547216.jpg?width=172&amp;height=172',
            category: 'At Home'
          },{
            id: 107,
            title: 'Brazillian Coffee 250 Gr',
            price: 'EGP 400',
            image: 'https://www.talabat.com/assets/images/img-placeholder.svg',
            category: 'At Home'
          },{
            id: 108,
            title: 'Guatemala Coffee 250 Gr',
            price: 'EGP 570',
            image: 'https://www.talabat.com/assets/images/img-placeholder.svg',
            category: 'At Home'
          },
            ];

            const categories = [
              'Picks for you 🔥', 'Summer Drinks', 'Iced Blend Esfrappa', 'Juices', 'Milk Blend','Coffee','Iced Coffee','Signature','Cold Brew',
              'Matcha','Tea','Latte','Espresso','Chocolate','Soft Drinks','Dessert','Sandwiches','Cheesecake','Grab and Go','Bakeries','At Home'
            ];
            return (
              <>
                <div className="flex">
                  {/* ناف بار مع أيقونة سلة المشتريات */}
                  <div className="bg-gray-200 w-full p-4 px-20 flex justify-between items-center">
                    <h2 className="text-3xl font-bold">Our Menu</h2>
                    <div className="relative">
                      <button
                        onClick={() => setCartOpen(!isCartOpen)} // تغيير حالة السلة عند الضغط على الأيقونة
                        className="text-3xl p-2"
                      >
                        <FaShoppingCart />
                        {/* إظهار عدد العناصر في السلة */}
                        {cart.length > 0 && (
                          <span className="absolute top-0 right-0 bg-red-600 text-white text-sm rounded-full w-5 h-5 flex items-center justify-center">
                            {cart.length}
                          </span>
                        )}
                      </button>

                      {/* قائمة السلة المنسدلة */}
                      {isCartOpen && (
                        <div className="absolute right-0 bg-white shadow-lg p-4 rounded-lg w-64 mt-2">
                          <h3 className="font-semibold">Your Cart</h3>
                          <ul className="space-y-2">
                            {cart.map((item, index) => (
                              <li key={index} className="flex justify-between">
                                <span>{item.title}</span>
                                <button
                                  onClick={() => removeFromCart(item.id)}
                                  className="text-red-500 text-sm"
                                >
                                  Remove
                                </button>
                              </li>
                            ))}
                          </ul>
                          {isCheckoutEnabled && (
                            <button
                              onClick={proceedToCheckout}
                              className="bg-red-700 text-white py-2 px-4 rounded-full w-full mt-4"
                            >
                              Proceed to Checkout
                            </button>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* صفحة القائمة */}
                <div className="container max-w-full bg-gray-200 p-16">
                  <div className="mb-8">
                    {categories.map((category, index) => (
                      <div key={index}>
                        <button
                          onClick={() => toggleCategory(category)}
                          className="text-lg font-semibold py-2 text-center px-4 w-full bg-gray-50 rounded-md mb-2 focus:outline-none flex justify-between items-center"
                        >
                          {category}
                          {/* السهم حسب حالة الفئة */}
                          {activeCategory === category ? (
                            <FaChevronUp />
                          ) : (
                            <FaChevronDown />
                          )}
                        </button>
                        {activeCategory === category && (
                          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {products
                              .filter(product => product.category === category)
                              .map((product) => (
                                <ProductCard
                                  key={product.id}
                                  image={product.image}
                                  title={product.title}
                                  description={product.description}
                                  price={product.price}
                                  onAddToCart={() => addToCart(product)} // إضافة المنتج إلى السلة
                                />
                              ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </>
            );
          };

          export default MenuPage;