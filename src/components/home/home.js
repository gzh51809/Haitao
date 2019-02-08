import React from 'react';
import { Icon } from 'antd';

import { Carousel } from 'antd';
import 'antd/dist/antd.css';
import axios from 'axios';
// import fetch from 'fetch';
import Topsearch from '../common/topsearch';
import Arrival from './arrival';
import Mother from './mother';

import '../style/home/home.css';

class Home extends React.Component {
    constructor() {
        super();
        this.state = {
            // 限时抢购
            RelatedProductsList:[
                {
                    ImageUrl: "https://resource.51taouk.com/AdminImages/Product/6/c186352e-9d62-49d3-9603-e808a9ac42e9.jpg",
                    Name: "【包邮包税】HOLLAND & BARRETT 月见草精华胶囊 1000mg 120粒X3",
                    SpecialPrice: 37.95,
                    OldPrice: 59.97
                },{
                    ImageUrl: "https://resource.51taouk.com/AdminImages/Product/6/a0cc5bdc-2650-4ece-bddc-1548e905255d.jpg",
                    Name: "【包邮包税】HOLLAND & BARRETT 蓝莓叶黄素护眼软胶囊保护视力缓解疲劳  60粒X2",
                    SpecialPrice: 16.87,
                    OldPrice: 22.58
                },{
                    ImageUrl: "https://resource.51taouk.com/AdminImages/Product/6/185c0528-fcab-4468-bc0a-8489f18db2d3.jpg",
                    Name: "【包邮包税】HOLLAND & BARRETT 维生素C咀嚼片1000毫克90片X4",
                    SpecialPrice: 32.62,
                    OldPrice: 59.99
                },{
                    ImageUrl: "https://resource.51taouk.com/AdminImages/Product/6/f1e5249e-f7ce-4095-9581-9a8b59a4fad6.jpg",
                    Name: "【包邮包税】HOLLAND & BARRETT 辅酶Q10-100毫克30粒X4",
                    SpecialPrice: 43.1,
                    OldPrice: 75.8
                },{
                    ImageUrl: "https://resource.51taouk.com/AdminImages/Product/6/eaec9bb0-5654-4ad9-8c74-9a62a407149e.jpg",
                    Name: "【包邮包税】HOLLAND & BARRETT 巴西莓果瘦身燃脂抗氧化加强 90粒X3",
                    SpecialPrice: 30.21,
                    OldPrice: 59.97
                },{
                    ImageUrl: "https://resource.51taouk.com/AdminImages/Product/6/1425f656-1968-495f-b9ab-dcb461b71374.jpg",
                    Name: "【包邮包税】HOLLAND & BARRETT 大蒜油2000毫克250粒X2",
                    SpecialPrice: 16.6,
                    OldPrice: 20
                },{
                    ImageUrl: "https://resource.51taouk.com/AdminImages/Product/6/f1bd563a-cc10-4e94-944d-dcc3088cb8f8.jpg",
                    Name: "【包邮包税】HOLLAND & BARRETT 氨糖硫酸盐1000毫克30粒X4",
                    SpecialPrice: 17.2,
                    OldPrice: 50.99
                },{
                    ImageUrl: "https://resource.51taouk.com/AdminImages/Product/6/37597cb9-bd25-4737-8353-4b88066365d4.jpg",
                    Name: "【包邮包税】HOLLAND & BARRETT 中老年复合维生素ABC+120粒X4",
                    SpecialPrice: 27.36,
                    OldPrice: 39.96
                },{
                    ImageUrl: "https://resource.51taouk.com/AdminImages/Product/6/166b0c50-711f-4c97-afa3-aa535d862f17.jpg",
                    Name: "【包邮包税】HOLLAND & BARRETT 鳕鱼肝油1000毫克240粒X2",
                    SpecialPrice: 30.6,
                    OldPrice: 36.72
                },{
                    ImageUrl: "https://resource.51taouk.com/AdminImages/Product/6/54588945-9573-4675-8d48-96b878a687ab.jpg",
                    Name: "【包邮包税】HOLLAND & BARRETT 水解胶原蛋白美白紧致180粒X2",
                    SpecialPrice: 27.07,
                    OldPrice: 32.49
                },{
                    ImageUrl: "https://resource.51taouk.com/AdminImages/Product/6/f24f512e-3ae4-4b59-ad6a-479073190dfd.jpg",
                    Name: "【包邮包税】HOLLAND & BARRETT 维生素C咀嚼片1000毫克90片X2",
                    SpecialPrice: 19.23,
                    OldPrice: 20
                },{
                    ImageUrl: "https://resource.51taouk.com/AdminImages/Product/6/c0d51e61-b821-4d24-b942-72fd574468d0.jpg",
                    Name: "【包邮包税】HOLLAND & BARRETT 蔓越莓精华胶囊100粒X2",
                    SpecialPrice: 12.97,
                    OldPrice: 17.98
                },{
                    ImageUrl: "https://resource.51taouk.com/AdminImages/Product/6/496b7fab-3586-4e58-8ebb-57d59bd3a849.jpg",
                    Name: "【包邮包税】HOLLAND & BARRETT 巴西莓果瘦身燃脂抗氧化加强 90粒X2",
                    SpecialPrice: 20.9,
                    OldPrice: 39.98
                },{
                    ImageUrl: "https://resource.51taouk.com/AdminImages/Product/6/0d03a361-23fb-4397-819a-083310d1da43.jpg",
                    Name: "【包邮包税】HOLLAND & BARRETT 维生素C玫瑰果1000毫克100粒X2",
                    SpecialPrice: 13.42,
                    OldPrice: 15.98
                },{
                    ImageUrl: "https://resource.51taouk.com/AdminImages/Product/6/ac341821-019b-453a-883a-335620bcd388.jpg",
                    Name: "【包邮包税】HOLLAND & BARRETT Omega3 深海鱼油 250粒X2",
                    SpecialPrice: 35.1,
                    OldPrice: 39.98
                }
            ],
            // 新品上市
            listNewArrive:[
                {
                ImageUrl: "https://resource.51taouk.com/AdminImages/Product/6/2886cba4-b9ff-4659-87a0-9abd99f4048b.jpg",
                Name: "【包邮包税】thisworks助眠旅行套装50ml",
                Price: 57.59,
                OldPrice: 69.16
                }, {
                    ImageUrl: "https://resource.51taouk.com/AdminImages/Product/6/df270ab6-aa08-41f0-9e47-5ba145836c8b.jpg",
                    Name: "【包邮包税】安娜贝尔卡摩尔有机香蕉蓝莓椰奶果泥100g+ 香蕉香梨桃子果泥100g + 西梅苹果香梨果泥100g + 草莓香蕉椰奶果泥100g + 婴儿意面250g",
                    Price: 13.57,
                    OldPrice: 16.29
                }, {
                    ImageUrl: "https://resource.51taouk.com/AdminImages/Product/6/aba90855-247a-4182-8c45-ad8af76b39a5.jpg",
                    Name: "HAWKINS&BRIMBLE控油保湿霜100ml",
                    Price: 10.99,
                    OldPrice: 14.95
                }, {
                    ImageUrl: "https://resource.51taouk.com/AdminImages/Product/6/39661c59-e806-470a-980b-ec0ce611695f.jpg",
                    Name: "【包邮包税】thisworks抗皱极润保湿霜48ml",
                    Price: 54.18,
                    OldPrice: 46
                }, {
                    ImageUrl: "https://resource.51taouk.com/AdminImages/Product/6/76059428-ed5e-41c3-8e37-cd230ec0799d.jpg",
                    Name: "【包邮包税】waitrose2019新年大礼包3号",
                    Price: 20.07,
                    OldPrice: 24.08
                }, {
                    ImageUrl: "https://resource.51taouk.com/AdminImages/Product/6/4e112069-f0e3-4bc0-8327-34d51dc9f793.jpg",
                    Name: "【包邮包税】Lilycharmed金色生肖猪手链HappyChineseNewYear",
                    Price: 38.85,
                    OldPrice: 40
                }, {
                    ImageUrl: "https://resource.51taouk.com/AdminImages/Product/6/374ed729-8a5c-4180-be1b-48413d6b99d0.jpg",
                    Name: "【包邮包税】BetterYou复合维生素口服喷雾儿童版25ml",
                    Price: 12.71,
                    OldPrice: 15.25
                }, {
                    ImageUrl: "https://resource.51taouk.com/AdminImages/Product/6/b3712b22-0e68-478a-b7ab-d328d6c0f49e.jpg",
                    Name: "SCRUBBINGTONS走珠止汗液50ml",
                    Price: 2.99,
                    OldPrice: 3.99
                }
            ],
            listHomeCategory:[
                {
                Name: "母婴用品",
                ImageUrl:"https://resource.51taouk.com/AdminImages/Content1/1/feb1b0da-ae44-4df7-89db-36e4799b8a3c.png",
                TopProductList:[
                    {
                        ImageUrl: "https://resource.51taouk.com/AdminImages/Product/6/6b2953ea-f2e7-4050-a2f6-411948892aae.jpg",
                        Name: "Sudocrem 屁屁乐 护臀膏 屁屁霜&清洁毛孔面膜  400g",
                        SpecialPrice: 7.2,
                        OldPrice: 7.99
                    },{
                        ImageUrl: "https://resource.51taouk.com/AdminImages/Product/6/ee5f3f12-ab9b-42a9-85c8-49e56badb32d.jpg",
                        Name: "爱他美婴儿辅食黄金双歧因子 有机纯米糊米粉 4-6个月 100g",
                        SpecialPrice: 2.09,
                        OldPrice: 2.7
                    }, {
                        ImageUrl: "https://resource.51taouk.com/AdminImages/Product/6/e9b45b3e-f127-4c3f-9ea9-09a474f530af.jpg",
                        Name: "【包邮包税】Waitrose婴儿按摩精油125mlX2",
                        SpecialPrice: 8.99,
                        OldPrice: 10.8
                    }, {
                        ImageUrl: "https://resource.51taouk.com/AdminImages/Product/6/25d42767-8f53-471d-a489-b748c1f1a60e.jpg",
                        Name: "Organix小食苹果米饼50g",
                        SpecialPrice: 1.35,
                        OldPrice: 1.99
                    }, {
                        ImageUrl: "https://resource.51taouk.com/AdminImages/Product/6/eeea223a-044a-441e-9436-fdd78e9425b8.jpg",
                        Name: "【包邮包税】Osteocare液体钙200ml 5瓶装",
                        SpecialPrice: 23.61,
                        OldPrice: 49
                    }, {
                        ImageUrl: "https://resource.51taouk.com/AdminImages/Product/6/c3034016-00f6-484d-aeaa-161be9a7bc1b.jpg",
                        Name: "Organix小食香蕉米饼50g",
                        SpecialPrice: 1.35,
                        OldPrice: 1.5
                    }, {
                        ImageUrl: "https://resource.51taouk.com/AdminImages/Product/6/24455260-3bff-4f4e-a7e7-b0c4cdacc195.jpg",
                        Name: "Organix小食樱桃米饼50g",
                        SpecialPrice: 1.35,
                        OldPrice: 1.99
                    }, {
                        ImageUrl: "https://resource.51taouk.com/AdminImages/Product/6/db2afd20-570f-4260-bb35-aa3cdc4b6e45.jpg",
                        Name: "Organix草莓香蕉米糊120g",
                        SpecialPrice: 1.99,
                        OldPrice: 2.3
                    }, {
                        ImageUrl: "https://resource.51taouk.com/AdminImages/Product/6/6694c138-ddff-4f3e-8876-47368cd8c534.jpg",
                        Name: "Organix香蕉李子米糊200g",
                        SpecialPrice: 2.35,
                        OldPrice: 2.6
                    }, {
                        ImageUrl: "https://resource.51taouk.com/AdminImages/Product/6/e0262b5d-991a-49a4-833b-e88f84db6deb.jpg",
                        Name: "Organix好食迷你芝士饼干80g",
                        SpecialPrice: 3.99,
                        OldPrice: 2.25
                    }
                ]   
                },{
                    Name: "营养保健",
                    ImageUrl:"https://resource.51taouk.com/AdminImages/Content1/1/866f4868-dcdb-46da-ad77-9365658e6ff6.png",
                    TopProductList:[
                        {
                            ImageUrl: "https://resource.51taouk.com/AdminImages/Product/6/43b5fe0c-cfb9-4fb7-99df-5dc6fd697621.jpg",
                            Name: "Floradix iron铁元补铁补血 500ml",
                            SpecialPrice: 10.88,
                            OldPrice: 12.07
                        },{
                            ImageUrl: "https://resource.51taouk.com/AdminImages/Product/6/470b41f1-dd33-42da-98a6-1778baafdf34.jpg",
                            Name: "HOLLAND & BARRETT 美容养颜紧致水解胶原蛋白营养片 180粒/瓶",
                            SpecialPrice: 12.28,
                            OldPrice: 25.59
                        },{
                            ImageUrl: "https://resource.51taouk.com/AdminImages/Product/6/1b58e030-0a50-4a76-bb2a-8b1a3738da87.jpg",
                            Name: "HOLLAND & BARRETT 月见草精华胶囊 1000mg 120粒",
                            SpecialPrice: 9.8,
                            OldPrice: 19.99
                        },{
                            ImageUrl: "https://resource.51taouk.com/AdminImages/Product/6/6ebe2e90-70c4-45b4-86f2-b356e2d0044c.jpg",
                            Name: "【包邮包税】HOLLAND & BARRETT 月见草精华胶囊 1000mg 120粒X2",
                            SpecialPrice: 26.11,
                            OldPrice: 39.98
                        },{
                            ImageUrl: "https://resource.51taouk.com/AdminImages/Product/6/c186352e-9d62-49d3-9603-e808a9ac42e9.jpg",
                            Name: "【包邮包税】HOLLAND & BARRETT 月见草精华胶囊 1000mg 120粒X3",
                            SpecialPrice: 37.95,
                            OldPrice: 59.97
                        },{
                            ImageUrl: "https://resource.51taouk.com/AdminImages/Product/6/2a12ba40-d665-4cbb-9646-86e7ebbabff8.jpg",
                            Name: "【包邮包税】HOLLAND & BARRETT 維他命C添加野玫瑰果 100粒X2",
                            SpecialPrice: 12.74,
                            OldPrice: 15.98
                        },{
                            ImageUrl: "https://resource.51taouk.com/AdminImages/Product/6/a0cc5bdc-2650-4ece-bddc-1548e905255d.jpg",
                            Name: "【包邮包税】HOLLAND & BARRETT 蓝莓叶黄素护眼软胶囊保护视力缓解疲劳  60粒X2",
                            SpecialPrice: 16.87,
                            OldPrice: 22.58
                        },{
                            ImageUrl: "https://resource.51taouk.com/AdminImages/Product/6/4c2cbe22-3e37-4caa-bb6a-e8c1edc620d5.jpg",
                            Name: "【包邮包税】Floradix iron铁元补铁补血 500mlX2",
                            SpecialPrice: 37.05,
                            OldPrice: 45.2
                        },{
                            ImageUrl: "https://resource.51taouk.com/AdminImages/Product/6/c2c1b72a-7266-4945-a9e7-9e2451ac340d.jpg",
                            Name: "【包邮包税】Bepanthen 拜耳 宝宝护臀霜尿布红疹膏100gX2",
                            SpecialPrice: 19.15,
                            OldPrice: 30
                        },{
                            ImageUrl: "https://resource.51taouk.com/AdminImages/Product/6/1425f656-1968-495f-b9ab-dcb461b71374.jpg",
                            Name: "【包邮包税】HOLLAND & BARRETT 大蒜油2000毫克250粒X2",
                            SpecialPrice: 16.6,
                            OldPrice: 20
                        }
                    ]
                },{
                    Name: "美容美发",
                    ImageUrl:"https://resource.51taouk.com/AdminImages/Content1/1/c8c27943-b841-4886-a554-b4bab77755fc.png",
                    TopProductList:[
                        {
                            ImageUrl: "https://resource.51taouk.com/AdminImages/Product/6/df9dccf6-c5b6-4a24-a8ae-e3a0013de43c.jpg",
                            Name: "澳洲Aussie袋鼠奇迹保湿洗发水300ml",
                            SpecialPrice: 3.52,
                            OldPrice: 3.79
                        },{
                            ImageUrl: "https://resource.51taouk.com/AdminImages/Product/6/a2831164-9e85-4787-8456-3496a1a78b91.jpg",
                            Name: "The Body Shop 美体小铺茶树精油10ML",
                            SpecialPrice: 6.24,
                            OldPrice: 8
                        },{
                            ImageUrl: "https://resource.51taouk.com/AdminImages/Product/6/c9fb02ba-0fc2-4380-8e54-515e59087548.jpg",
                            Name: "GROW GORGEOUS 清洁护发素 190ml/1瓶",
                            SpecialPrice: 12.99,
                            OldPrice: 18
                        },{
                            ImageUrl: "https://resource.51taouk.com/AdminImages/Product/6/c2306ffe-0695-45ac-80cc-7c6f0676adbb.jpg",
                            Name: "GROW GORGEOUS 清洁锁色护发素 1支",
                            SpecialPrice: 11.99,
                            OldPrice: 20
                        },{
                            ImageUrl: "https://resource.51taouk.com/AdminImages/Product/6/0c54cd43-26ef-4d1a-865c-9a72a5c6f529.jpg",
                            Name: "GROW GORGEOUS 防发尾开叉 头发护理精华液 120ml",
                            SpecialPrice: 12.99,
                            OldPrice: 19
                        },{
                            ImageUrl: "https://resource.51taouk.com/AdminImages/Product/6/8e366342-1530-4f45-aa06-f80dfa7b06cd.jpg",
                            Name: "GROW GORGEOUS 睡眠滋养发膜 头发柔顺有光泽 190ml",
                            SpecialPrice: 14.99,
                            OldPrice: 22
                        },{
                            ImageUrl: "https://resource.51taouk.com/AdminImages/Product/6/944ffdca-e329-406a-a15e-d76f526e7f0a.jpg",
                            Name: "Waitrose 婴儿洗发水 250ml",
                            SpecialPrice: 1.99,
                            OldPrice: 3.79
                        },{
                            ImageUrl: "https://resource.51taouk.com/AdminImages/Product/6/e2801161-b0e8-4c9a-9865-60eb75f30e29.jpg",
                            Name: "GROW GORGEOUS 闪亮精华60ml",
                            SpecialPrice: 14.99,
                            OldPrice: 22
                        },{
                            ImageUrl: "https://resource.51taouk.com/AdminImages/Product/6/15370c10-382e-4591-a5d0-eda010ef9376.jpg",
                            Name: "【包邮包税】Boots博姿 小黄瓜眼妆卸妆片40片X5",
                            SpecialPrice: 13.09,
                            OldPrice: 18
                        },{
                            ImageUrl: "https://resource.51taouk.com/AdminImages/Product/6/4f4cf9fc-09f6-4b1a-bb8d-556673625c49.jpg",
                            Name: "【包邮包税】LUSH小红帽洗发皂55gX4",
                            SpecialPrice: 41.06,
                            OldPrice: 50
                        }
                    ]
                },{
                    Name: "英式生活",
                    ImageUrl:"https://resource.51taouk.com/AdminImages/Content1/1/2b3b1879-a5d7-4450-8f8d-b59834ac42dd.png",
                    TopProductList:[
                        {
                            ImageUrl: "https://resource.51taouk.com/AdminImages/Product/6/9054d6da-c08a-4c7c-93ac-2a6fa19ce22a.jpg",
                            Name: "【包邮包税】BRITA碧然德 高智能过滤水壶净水壶 3.5L+带滤芯一只",
                            SpecialPrice: 26.55,
                            OldPrice: 39.99
                        },{
                            ImageUrl: "https://resource.51taouk.com/AdminImages/Product/6/0d6bf91d-92c4-4cdf-8cad-e025bdbfbb02.jpg",
                            Name: "【包邮包税】StEvalCandleCompany春之花小金罐蜡烛X2",
                            SpecialPrice: 22.72,
                            OldPrice: 19.5
                        },{
                            ImageUrl: "https://resource.51taouk.com/AdminImages/Product/6/5a08bdb4-3e0b-45de-ad28-953577efdca5.jpg",
                            Name: "【包邮包税】Slim Fast 代餐奶昔香草味438gX2",
                            SpecialPrice: 23.17,
                            OldPrice: 23.98
                        },{
                            ImageUrl: "https://resource.51taouk.com/AdminImages/Product/6/b9f58f69-0ec8-48ea-8cdd-30e689c8af28.jpg",
                            Name: "Waitrose黄油手指饼干200g",
                            SpecialPrice: 0.99,
                            OldPrice: 2
                        },{
                            ImageUrl: "https://resource.51taouk.com/AdminImages/Product/6/2fe5bb4d-9c0f-4d44-803d-21af2cee9206.jpg",
                            Name: "Waitrose摩卡混合研磨咖啡227g",
                            SpecialPrice: 3.55,
                            OldPrice: 4.25
                        },{
                            ImageUrl: "https://resource.51taouk.com/AdminImages/Product/6/d89f4b00-c798-4437-a1f4-bb8115d0ecd6.jpg",
                            Name: "Waitrose哥伦比亚微磨速溶咖啡粉80g",
                            SpecialPrice: 2.9,
                            OldPrice: 4
                        },{
                            ImageUrl: "https://resource.51taouk.com/AdminImages/Product/6/730ee818-d837-48d1-b7fb-d8c3db140dc1.jpg",
                            Name: "【包邮】BROMPTON折叠自行车经典款M把6速清漆灰",
                            SpecialPrice: 1375.11,
                            OldPrice: 1245
                        },{
                            ImageUrl: "https://resource.51taouk.com/AdminImages/Product/6/8e797d00-1769-4769-a6d3-11574f7cc0df.jpg",
                            Name: "【包邮】BROMPTON折叠自行车旅行者M把6速赛车绿",
                            SpecialPrice: 1255.22,
                            OldPrice: 1135
                        },{
                            ImageUrl: "https://resource.51taouk.com/AdminImages/Product/6/3a34594f-5436-4317-8aa3-c2ddf812a33d.jpg",
                            Name: "【包邮】BROMPTON折叠自行车城市车手S把2速青柠绿",
                            SpecialPrice: 1050.11,
                            OldPrice: 1499
                        },{
                            ImageUrl: "https://resource.51taouk.com/AdminImages/Product/6/091a6e4b-1d6d-43bd-a3b3-af3b086d8319.jpg",
                            Name: "【包邮包税】缇树小红草莓藤草香薰100ml",
                            SpecialPrice: 38.13,
                            OldPrice: 41.94
                        }
                    ]
                },{
                    Name: "英伦轻奢",
                    ImageUrl:"https://resource.51taouk.com/AdminImages/Content1/1/e52621ee-91dd-4cc3-ae5a-fee4e7e727b5.png",
                    TopProductList:[
                        {
                            ImageUrl: "https://resource.51taouk.com/AdminImages/Product/6/460cf6fd-016d-49c1-938f-32b9c8edfcd2.jpg",
                            Name: "【包邮】ELIE BEAUMONT牛津网格表链手表玫瑰金黑色",
                            SpecialPrice: 57.63,
                            OldPrice: 69.16
                        },{
                            ImageUrl: "https://resource.51taouk.com/AdminImages/Product/6/1faaf237-d1f6-4889-82b0-6f2961c3278b.jpg",
                            Name: "【包邮】ELIE BEAUMONT牛津网格表链手表玫瑰金白色",
                            SpecialPrice: 57.63,
                            OldPrice: 69.16
                        },{
                            ImageUrl: "https://resource.51taouk.com/AdminImages/Product/6/b0c78937-4002-475b-8c3e-21e2579d2fb5.jpg",
                            Name: "【包邮】ELIE BEAUMONT牛津手表深蓝色",
                            SpecialPrice: 50.41,
                            OldPrice: 60.49
                        },{
                            ImageUrl: "https://resource.51taouk.com/AdminImages/Product/6/d1aacc78-cb78-4152-9398-762eaa0b3389.jpg",
                            Name: "【包邮包税】Lilycharmed银色女王蜂项链",
                            SpecialPrice: 31.05,
                            OldPrice: 48.65
                        },{
                            ImageUrl: "https://resource.51taouk.com/AdminImages/Product/6/b0ccd93d-f42d-41fa-9d41-838cac76b69d.jpg",
                            Name: "【包邮包税】Lilycharmed银色梦星球项链",
                            SpecialPrice: 29.75,
                            OldPrice: 43.58
                        },{
                            ImageUrl: "https://resource.51taouk.com/AdminImages/Product/6/434fb591-8323-4dfc-b299-02c7ce6edbc3.png",
                            Name: "【包邮包税】Zatchels经典绿色马鞍包小号",
                            SpecialPrice: 73.95,
                            OldPrice: 84.96
                        },{
                            ImageUrl: "https://resource.51taouk.com/AdminImages/Product/6/a0d60ded-ffe5-44eb-8ed4-5955b0fe91f9.jpg",
                            Name: "【包邮包税】Zatchels淡蓝色水桶包",
                            SpecialPrice: 60.95,
                            OldPrice: 70.37
                        },{
                            ImageUrl: "https://resource.51taouk.com/AdminImages/Product/6/b66f6e1d-5ce6-4652-9a5f-8235d1c07e7f.jpg",
                            Name: "【包邮包税】Zatchels栗色水桶包",
                            SpecialPrice: 43.75,
                            OldPrice: 70.37
                        },{
                            ImageUrl: "https://resource.51taouk.com/AdminImages/Product/6/9be2a681-cf2e-4afa-b50e-8cd6d628f369.jpg",
                            Name: "【包邮包税】Zatchels栗色经典迷你剑桥包",
                            SpecialPrice: 71.35,
                            OldPrice: 82.53
                        },{
                            ImageUrl: "https://resource.51taouk.com/AdminImages/Product/6/c05325bd-3ebe-417f-93d5-5c625f8816c8.jpg",
                            Name: "【包邮包税】Zatchels嫩粉色经典迷你剑桥包",
                            SpecialPrice: 71.35,
                            OldPrice: 82.53
                        }
                    ]
                }
            ]
        }
    }
    componentDidMount(){
        // axios.get('https://webapi.51taouk.com/api/content/getAllContentsByPage/app')
        // axios.get('../../../data/home.php')
        // .then((res)=>{
        //     console.log(res);
        // })
        // .catch((err)=>{
        //     console.log(err);
        // })
    }
    render(){
        return (
            <div className="home">
                <Topsearch></Topsearch>
                <Carousel autoplay>
                    <div className="adver"><img alt="" src="https://resource.51taouk.com/AdminImages/Content1/1/09c396d3-cf84-4e9a-a8ba-ee237a0b98ba.jpg" /></div>
                    <div className="adver"><img alt="" src="https://resource.51taouk.com/AdminImages/Content1/1/8aa32839-80a5-4eca-8285-53f2d9cbe719.jpg" /></div>
                    <div className="adver"><img alt="" src="https://resource.51taouk.com/AdminImages/Content1/1/77043802-ae84-477d-9e67-53e637a38e12.jpg" /></div>
                </Carousel>
                <div className="timer">
                    <div className="limit">
                        <div className="title">
                            <Icon type="clock-circle" />
                            <span>限时抢购</span>
                            <div className="count">
                                <span>距离结束还剩&nbsp;</span>
                                <div className="down">
                                    <span>238</span> :&nbsp;
                                    <span>05</span> :&nbsp;
                                    <span>01</span> :&nbsp;
                                    <span>16</span>
                                </div>
                            </div>
                        </div>
                        <img alt="" src="https://resource.51taouk.com/AdminImages/Content1/1/26b4480b-e8f9-4433-bc41-3a357f967fd5.png?imageMogr2/format/webp/thumbnail/x536" />
                        <div className="rob">
                            <div className="robItems">
                                {
                                    this.state.RelatedProductsList.map((item,index)=>{
                                        return (
                                            <div className="item" key={index}>
                                                <div>
                                                    <div className="img"><img src={item.ImageUrl} /></div>
                                                    <p className="text">{item.Name}</p>
                                                    <p className="price">
                                                        <span className="active">￥</span><span className="active">{item.SpecialPrice}</span>
                                                        <span className="del"><del>￥{item.OldPrice}</del></span>
                                                    </p>
                                                    <div className="btn">立即抢</div>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                                {/* <li>
                                    <div className="img"><img src="https://resource.51taouk.com/AdminImages/Product/6/c186352e-9d62-49d3-9603-e808a9ac42e9.jpg?imageMogr2/format/webp/thumbnail/x200" /></div>
                                    <p className="text">【包邮包税】HOLLAND & BARRETT 月见草精华胶囊 1000mg 120粒X3</p>
                                    <p className="price">
                                        <span className="active">￥</span><span className="active">35.90</span>
                                        <span className="del"><del>￥59.97</del></span>
                                    </p>
                                    <div className="btn">立即抢</div>
                                </li>
                                <li>
                                    <div className="img"><img src="https://resource.51taouk.com/AdminImages/Product/6/c186352e-9d62-49d3-9603-e808a9ac42e9.jpg?imageMogr2/format/webp/thumbnail/x200" /></div>
                                    <p className="text">【包邮包税】HOLLAND & BARRETT 月见草精华胶囊 1000mg 120粒X3</p>
                                    <p className="price">
                                        <span className="active">￥</span><span className="active">35.90</span>
                                        <span className="del"><del>￥59.97</del></span>
                                    </p>
                                    <div className="btn">立即抢</div>
                                </li>
                                <li>
                                    <div className="img"><img src="https://resource.51taouk.com/AdminImages/Product/6/c186352e-9d62-49d3-9603-e808a9ac42e9.jpg?imageMogr2/format/webp/thumbnail/x200" /></div>
                                    <p className="text">【包邮包税】HOLLAND & BARRETT 月见草精华胶囊 1000mg 120粒X3</p>
                                    <p className="price">
                                        <span className="active">￥</span><span className="active">35.90</span>
                                        <span className="del"><del>￥59.97</del></span>
                                    </p>
                                    <div className="btn">立即抢</div>
                                </li> */}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hot">
                    <div className="title">
                        <Icon type="trophy" theme="filled" style={{color:'#f6a623'}} />
                        <span>热销产品</span>
                        <div>英国好评明星产品</div>
                    </div>
                    <img src="https://resource.51taouk.com/AdminImages/Content1/1/5b00646c-d4ef-446b-8f19-94c4aaaaf144.png?imageMogr2/format/webp/thumbnail/x536" />
                    <div className="products">
                        <div className="item">
                            <div className="productImg">
                                <img src="https://resource.51taouk.com/AdminImages/Product/6/979a96f9-caca-4034-b55a-b25669b54f26.jpg" />
                            </div>
                            <p className="text">【包邮包税】MARVEL成人低脂奶粉340gX4</p>
                            <p className="price">
                                <span className="active">￥</span><span className="active">20.41</span>
                                <span className="del"><del>￥30.00</del></span>
                            </p>
                        </div>
                        <div className="item">
                            <div className="productImg">
                                <img src="https://resource.51taouk.com/AdminImages/Product/6/2ae08a10-5420-438c-9d85-2440213e8751.jpg" />
                            </div>
                            <p className="text">【包邮包税】4罐 英国原装爱他美 白金版 2段 6-12个月 奶粉800G</p>
                            <p className="price">
                                <span className="active">￥</span><span className="active">96.00</span>
                                <span className="del"><del>￥101.00</del></span>
                            </p>
                        </div>
                        <div className="item">
                            <div className="productImg">
                                <img src="https://resource.51taouk.com/AdminImages/Product/6/f659c903-b05a-4bec-8a4b-49f88940a690.jpg" />
                            </div>
                            <p className="text">【包邮包税】6罐 英国原装爱他美 白金版 2段 6-12个月 奶粉800G</p>
                            <p className="price">
                                <span className="active">￥</span><span className="active">144.00</span>
                                <span className="del"><del>￥149.00</del></span>
                            </p>
                        </div>
                        <div className="item">
                            <div className="productImg">
                                <img src="https://resource.51taouk.com/AdminImages/Product/6/09cba6ac-1519-4597-b365-0d2c3b32d6fc.jpg" />
                            </div>
                            <p className="text">【包邮包税】6罐 英国原装爱他美 白金版 3段 1-2岁 奶粉800G</p>
                            <p className="price">
                                <span className="active">￥</span><span className="active">144.00</span>
                                <span className="del"><del>￥160.00</del></span>
                            </p>
                        </div>
                        <div className="item">
                            <div className="productImg">
                                <img src="https://resource.51taouk.com/AdminImages/Product/6/d9c7dea8-3ffb-4e8e-9685-405932760a92.jpg" />
                            </div>
                            <p className="text">【包邮包税】4罐 英国原装爱他美 白金版 3段 1-2岁 奶粉800G</p>
                            <p className="price">
                                <span className="active">￥</span><span className="active">96.00</span>
                                <span className="del"><del>￥110.00</del></span>
                            </p>
                        </div>
                        <div className="item">
                            <div className="productImg">
                                <img src="https://resource.51taouk.com/AdminImages/Product/6/fc6ca253-9df7-4d40-80a1-9a30c91e809e.jpg" />
                            </div>
                            <p className="text">【包邮包税】ManukaPharm 70抗菌值麦卢卡蜂蜜250g</p>
                            <p className="price">
                                <span className="active">￥</span><span className="active">24.43</span>
                                <span className="del"><del>￥33.99</del></span>
                            </p>
                        </div>
                    </div>
                </div>
                <Arrival data={this.state.listNewArrive}></Arrival>
                {
                    this.state.listHomeCategory.map((item,index)=>{
                        return <Mother data={item} key={index}></Mother>;
                    })
                }
                {/* <Mother></Mother>
                <Mother></Mother>
                <Mother></Mother>
                <Mother></Mother>
                <Mother></Mother> */}
                <div className="end">
                    <div className="one"></div>
                    <span>没有更多了</span>
                    <div className="two"></div>
                </div>
            </div>
        )
    }
}

export default Home;