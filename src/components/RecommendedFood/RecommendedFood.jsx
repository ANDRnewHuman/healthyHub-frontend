import React from 'react';
import illustration from '../../assets/RecommendedFood.svg';
// import css from './RecommendedFood.module.css';

const RecommendedFood = () => {
  const products = [
    {
      name: 'Apples',
      amount: '100 g',
      img: 'https://res.cloudinary.com/dec1shvoo/image/upload/v1692479041/Your%20health/pngfind.com-apple-png-1037796_udjai9.png',
      calories: 52,
      nutrition: {
        carbohydrates: 14,
        protein: 0.3,
        fat: 0.2,
      },
    },
    {
      name: 'Strawberries',
      amount: '100 g',
      img: 'https://res.cloudinary.com/dec1shvoo/image/upload/v1692479315/Your%20health/Single-Strawberries-PNG-HD-Isolated_sc0q7d.png',
      calories: 32,
      nutrition: {
        carbohydrates: 7.68,
        protein: 0.67,
        fat: 0.3,
      },
    },
    {
      name: 'Blueberries',
      amount: '100 g',
      img: 'https://res.cloudinary.com/dec1shvoo/image/upload/v1692473431/Your%20health/5bbd90939b171-550578ad4cdf0c24f986745af5b9fd7f_eru2fy.png',
      calories: 57,
      nutrition: {
        carbohydrates: 14.49,
        protein: 0.74,
        fat: 0.33,
      },
    },
    {
      name: 'Spinach',
      amount: '100 g',
      img: 'https://res.cloudinary.com/dec1shvoo/image/upload/c_scale,h_424,w_424/v1692473592/Your%20health/585ea80acb11b227491c353e_aajlhk.png',
      calories: 23,
      nutrition: {
        carbohydrates: 3.6,
        protein: 2.9,
        fat: 0.4,
      },
    },
    {
      name: 'Kale',
      amount: '100 g',
      img: 'https://res.cloudinary.com/dec1shvoo/image/upload/c_crop,g_center,h_900,w_900/v1692473879/Your%20health/kisspng-curly-kale-cabbage-stock-photography-image-champagne-deluxe-chocolate-dipped-strawberries-b-5bee4b70e0cc32.2282911815423435369208_rucqlc.png',
      calories: 49,
      nutrition: {
        carbohydrates: 8.8,
        protein: 3.3,
        fat: 0.9,
      },
    },
    {
      name: 'Quinoa',
      amount: '100 g',
      img: 'https://res.cloudinary.com/dec1shvoo/image/upload/c_crop,g_center,h_510,w_510/v1692474054/Your%20health/pngwing.com_2_udwraz.png',
      calories: 120,
      nutrition: {
        carbohydrates: 21.3,
        protein: 4.4,
        fat: 1.9,
      },
    },
    {
      name: 'Greek Yogurt',
      amount: '100 g',
      img: 'https://res.cloudinary.com/dec1shvoo/image/upload/v1692479514/Your%20health/pngimg.com_-_yogurt_PNG15206_ueqoom.png',
      calories: 59,
      nutrition: {
        carbohydrates: 3.6,
        protein: 10,
        fat: 0.4,
      },
    },
    {
      name: 'Chicken Breast',
      amount: '100 g',
      img: 'https://res.cloudinary.com/dec1shvoo/image/upload/c_scale,g_center,h_750,w_750/v1692475100/Your%20health/transparent-chicken-breast-animal-fat-chicken-meat-food-duck-m-5d69240e566f97.885460761567171598354_wfxd5x.png',
      calories: 165,
      nutrition: {
        carbohydrates: 0,
        protein: 31,
        fat: 3.6,
      },
    },
    {
      name: 'Vegetable Soup',
      amount: '100 g',
      img: 'https://res.cloudinary.com/dec1shvoo/image/upload/v1692475260/Your%20health/pngimg.com_-_soup_PNG106_qcekcb.png',
      calories: 50,
      nutrition: {
        carbohydrates: 10,
        protein: 3,
        fat: 2,
      },
    },
    {
      name: 'Buckwheat',
      amount: '100 g',
      img: 'https://res.cloudinary.com/dec1shvoo/image/upload/v1692479694/Your%20health/pngegg_jfgafb.png',
      calories: 340,
      nutrition: {
        carbohydrates: 72,
        protein: 12,
        fat: 4,
      },
    },
    {
      name: 'Eggs',
      amount: '100 g',
      img: 'https://res.cloudinary.com/dec1shvoo/image/upload/v1692479843/Your%20health/pngimg.com_-_egg_PNG40783_cpjotb.png',
      calories: 155,
      nutrition: {
        carbohydrates: 1,
        protein: 13,
        fat: 11,
      },
    },
    {
      name: 'Tofu',
      amount: '100 g',
      img: 'https://res.cloudinary.com/dec1shvoo/image/upload/v1692480020/Your%20health/pngegg_1_wak0wx.png',
      calories: 80,
      nutrition: {
        carbohydrates: 2,
        protein: 8,
        fat: 5,
      },
    },
    {
      name: 'Celery',
      amount: '100 g',
      img: 'https://res.cloudinary.com/dec1shvoo/image/upload/c_scale,h_362,w_362/v1692476114/Your%20health/pngaaa.com-2612404_rnkzk4.png',
      calories: 16,
      nutrition: {
        carbohydrates: 3,
        protein: 1,
        fat: 0.3,
      },
    },
    {
      name: 'Carrots',
      amount: '100 g',
      img: 'https://res.cloudinary.com/dec1shvoo/image/upload/v1692480238/Your%20health/kisspng-carrot-vegetable-radish-carrot-5a78829bbf3f55.5665313115178471957834_umsw0k.png',
      calories: 41,
      nutrition: {
        carbohydrates: 9,
        protein: 1,
        fat: 0.3,
      },
    },
    {
      name: 'Onions',
      amount: '100 g',
      img: 'https://res.cloudinary.com/dec1shvoo/image/upload/v1692480441/Your%20health/164056-onion-free-transparent-image-hd_aaxgus.png',
      calories: 40,
      nutrition: {
        carbohydrates: 9,
        protein: 1,
        fat: 0.3,
      },
    },
    {
      name: 'Cucumbers',
      amount: '100 g',
      img: 'https://res.cloudinary.com/dec1shvoo/image/upload/c_scale,h_902,w_902/v1692476613/Your%20health/vegetable_cucumber_on_a_transparent_background__by_prussiaart_dc29xo8-fullview_v6we1w.png',
      calories: 15,
      nutrition: {
        carbohydrates: 3,
        protein: 0.7,
        fat: 0.1,
      },
    },
    {
      name: 'Tomatoes',
      amount: '100 g',
      img: 'https://res.cloudinary.com/dec1shvoo/image/upload/v1692372018/Your%20health/tomatopng.parspng.com-5_ssyq0l.png',
      calories: 22,
      nutrition: {
        carbohydrates: 4,
        protein: 1,
        fat: 0.2,
      },
    },
    {
      name: 'Sweet Potatoes',
      amount: '100 g',
      img: 'https://res.cloudinary.com/dec1shvoo/image/upload/c_scale,h_509,w_509/v1692477020/Your%20health/pngfind.com-baked-potato-png-6016719_lsvyis.png',
      calories: 86,
      nutrition: {
        carbohydrates: 20,
        protein: 1.6,
        fat: 0.1,
      },
    },
    {
      name: 'Avocado',
      amount: '100 g',
      img: 'https://res.cloudinary.com/dec1shvoo/image/upload/v1692372430/Your%20health/1-2-avocado-png-clipart_ymr55e.png',
      calories: 160,
      nutrition: {
        carbohydrates: 8.5,
        protein: 2,
        fat: 14.7,
      },
    },
    {
      name: 'Beans',
      amount: '100 g',
      img: 'https://res.cloudinary.com/dec1shvoo/image/upload/v1692477317/Your%20health/Red-Kidney-Beans-PNG_iebv0w.png',
      calories: 123,
      nutrition: {
        carbohydrates: 22.3,
        protein: 8.7,
        fat: 0.4,
      },
    },
    {
      name: 'Nuts',
      amount: '100 g',
      img: 'https://res.cloudinary.com/dec1shvoo/image/upload/c_crop,g_center,h_646,w_646/v1692477465/Your%20health/kisspng-mixed-nuts-flavor-food-concentrate-5af7ae32c52f06.1000088015261814268077_zh9nom.png',
      calories: 650,
      nutrition: {
        carbohydrates: 15,
        protein: 22,
        fat: 55,
      },
    },
    {
      name: 'Broccoli',
      amount: '100 g',
      img: 'https://res.cloudinary.com/dec1shvoo/image/upload/v1692368724/Your%20health/580b57fcd9996e24bc43c1ff_bh1e5d.png',
      calories: 34,
      nutrition: {
        carbohydrates: 6.6,
        protein: 2.8,
        fat: 0.4,
      },
    },
    {
      name: 'Oats',
      amount: '100 g',
      img: 'https://res.cloudinary.com/dec1shvoo/image/upload/c_crop,h_1000/v1692478116/Your%20health/kisspng-rolled-oats-breakfast-cereal-whole-grain-oats-5abed7bd1c20a1.2201319615224565091152_m2lf88.png',
      calories: 65,
      nutrition: {
        carbohydrates: 15.5,
        protein: 5.7,
        fat: 3.1,
      },
    },
    {
      name: 'Lentils',
      amount: '100 g',
      img: 'https://res.cloudinary.com/dec1shvoo/image/upload/c_crop,g_center,h_350,w_350/v1692368719/Your%20health/5ba0d22f44d37f02b75178dc_tykah0.png',
      calories: 90,
      nutrition: {
        carbohydrates: 23.8,
        protein: 9.2,
        fat: 1.2,
      },
    },
    {
      name: 'Salmon',
      amount: '100 g',
      img: 'https://res.cloudinary.com/dec1shvoo/image/upload/c_scale,h_300,w_300/v1692478523/Your%20health/salmon-fillets-transparent-png-layers-of-transparency-for-quality-image_f3gplg.png',
      calories: 202,
      nutrition: {
        carbohydrates: 0,
        protein: 21.8,
        fat: 12.6,
      },
    },
    {
      name: 'Tuna',
      amount: '100 g',
      img: 'https://res.cloudinary.com/dec1shvoo/image/upload/v1692368730/Your%20health/187-1870804_fish-ecosia-inewconcom-your-transparent-background-tuna-png_ahdt0m.png',
      calories: 149,
      nutrition: {
        carbohydrates: 0,
        protein: 26.7,
        fat: 3.6,
      },
    },
    {
      name: 'Yogurt',
      amount: '100 g',
      img: 'https://res.cloudinary.com/dec1shvoo/image/upload/c_crop,g_center,h_1600,w_1600/v1692372018/Your%20health/yogurt-3d-illustration-icon-png_rnppnx.png',
      calories: 100,
      nutrition: {
        carbohydrates: 5.3,
        protein: 8.0,
        fat: 3.2,
      },
    },
    {
      name: 'Berries',
      amount: '100 g',
      img: 'https://res.cloudinary.com/dec1shvoo/image/upload/c_scale,h_550,w_550/v1692368727/Your%20health/28851-1-berries_gcj8fx.png',
      calories: 54,
      nutrition: {
        carbohydrates: 14.7,
        protein: 1.7,
        fat: 0.7,
      },
    },
    {
      name: 'Dark leafy greens',
      amount: '100 g',
      img: 'https://res.cloudinary.com/dec1shvoo/image/upload/c_scale,h_393,w_393/v1692478762/Your%20health/SeekPng.com_leafy-png_4384076_rdwzl3.png',
      calories: 25,
      nutrition: {
        carbohydrates: 4.7,
        protein: 4.3,
        fat: 0.4,
      },
    },
  ];
  return (
    <div>
      <p>RecommendedFood page</p>
      <img src={illustration} alt="recommended food illustration"></img>
      <ul>
        {products.map(product => (
          <li key={product.name}>
            <img src={product.img} alt="product" />
            amount={product.amount}
            calories={product.calories}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecommendedFood;
