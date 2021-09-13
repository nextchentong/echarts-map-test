var myChart = echarts.init(document.getElementById('Muli_01'), GreenTheme)
echarts.registerMap('china', geoJson)
myChart.hideLoading()
var data = [
  {
    name: '上海',
    value: (1990827315.48 / 100000000).toFixed(2),
    zbyj: 16.14,
    sgsej: 9.07,
    zb: 21.02,
    fzb: 16.79,
  },
  {
    name: '冀北',
    value: (3285589405.5 / 100000000).toFixed(2),
    zbyj: 2.68,
    sgsej: 0.18,
    zb: 16.4,
    fzb: 1.51,
  },
  {
    name: '北京',
    value: (1911141584.45 / 100000000).toFixed(2),
    zbyj: 1.55,
    sgsej: 22.67,
    zb: 8.89,
    fzb: 18.07,
  },
  {
    name: '吉林',
    value: (1358853111.8 / 100000000).toFixed(2),
    zbyj: 8.04,
    sgsej: 19.96,
    zb: 18.92,
    fzb: 21.94,
  },
  {
    name: '四川',
    value: (6767853479.65 / 100000000).toFixed(2),
    zbyj: 11.11,
    sgsej: 8.09,
    zb: 9.9,
    fzb: 8.54,
  },
  {
    name: '天津',
    value: (1585909360.04 / 100000000).toFixed(2),
    zbyj: 17.71,
    sgsej: 25.41,
    zb: 10.17,
    fzb: 24.25,
  },
  {
    name: '宁夏',
    value: (1574198456.54 / 100000000).toFixed(2),
    zbyj: 25.16,
    sgsej: 0.51,
    zb: 4.17,
    fzb: 11.14,
  },
  {
    name: '安徽',
    value: (3215255071.68 / 100000000).toFixed(2),
    zbyj: 8.41,
    sgsej: 28.07,
    zb: 23.43,
    fzb: 29.35,
  },
  {
    name: '山东',
    value: (4135694473.59 / 100000000).toFixed(2),
    zbyj: 15.85,
    sgsej: 15.79,
    zb: 21.17,
    fzb: 23.92,
  },
  {
    name: '山西',
    value: (5369202491.38 / 100000000).toFixed(2),
    zbyj: 21.24,
    sgsej: 6.17,
    zb: 4.83,
    fzb: 4.28,
  },
  {
    name: '新疆',
    value: (3544885061.63 / 100000000).toFixed(2),
    zbyj: 7.94,
    sgsej: 24.33,
    zb: 13.58,
    fzb: 12.38,
  },
  {
    name: '江苏',
    value: (3314075509.87 / 100000000).toFixed(2),
    zbyj: 13,
    sgsej: 28.16,
    zb: 21.37,
    fzb: 29.4,
  },
  {
    name: '江西',
    value: (4186336917.76 / 100000000).toFixed(2),
    zbyj: 13.26,
    sgsej: 20.43,
    zb: 14.41,
    fzb: 20.54,
  },
  {
    name: '河北',
    value: (6454516898.7 / 100000000).toFixed(2),
    zbyj: 13.63,
    sgsej: 8.66,
    zb: 12.1,
    fzb: 25.38,
  },
  {
    name: '河南',
    value: (2617805577.39 / 100000000).toFixed(2),
    zbyj: 20.5,
    sgsej: 19.09,
    zb: 27.34,
    fzb: 15.68,
  },
  {
    name: '浙江',
    value: (10453117012.61 / 100000000).toFixed(2),
    zbyj: 29.38,
    sgsej: 13.47,
    zb: 19.52,
    fzb: 6.37,
  },
  {
    name: '湖北',
    value: (4345516054.28 / 100000000).toFixed(2),
    zbyj: 9.8,
    sgsej: 5.44,
    zb: 5.66,
    fzb: 11.85,
  },
  {
    name: '湖南',
    value: (8963175969.68 / 100000000).toFixed(2),
    zbyj: 22.32,
    sgsej: 0.35,
    zb: 10.65,
    fzb: 5.11,
  },
  {
    name: '甘肃',
    value: (1538152818.4 / 100000000).toFixed(2),
    zbyj: 27.73,
    sgsej: 25.56,
    zb: 12.39,
    fzb: 2.72,
  },
  {
    name: '福建',
    value: (10244056119.01 / 100000000).toFixed(2),
    zbyj: 19.08,
    sgsej: 20.45,
    zb: 25.25,
    fzb: 3.03,
  },
  {
    name: '内蒙古',
    value: (3396265697.78 / 100000000).toFixed(2),
    zbyj: 1.89,
    sgsej: 1.77,
    zb: 22.62,
    fzb: 9.64,
  },
  {
    name: '西藏',
    value: (1599460611.01 / 100000000).toFixed(2),
    zbyj: 10.89,
    sgsej: 5.58,
    zb: 7.52,
    fzb: 2.36,
  },
  {
    name: '辽宁',
    value: (5862644986.86 / 100000000).toFixed(2),
    zbyj: 14.52,
    sgsej: 13.85,
    zb: 23.75,
    fzb: 28.98,
  },
  {
    name: '重庆',
    value: (2596090408.27 / 100000000).toFixed(2),
    zbyj: 2.69,
    sgsej: 23.51,
    zb: 14.97,
    fzb: 24.5,
  },
  {
    name: '陕西',
    value: (1548113072.59 / 100000000).toFixed(2),
    zbyj: 13.24,
    sgsej: 21.73,
    zb: 24.62,
    fzb: 20.76,
  },
  {
    name: '青海',
    value: (1454847600.89 / 100000000).toFixed(2),
    zbyj: 26.46,
    sgsej: 24,
    zb: 1.07,
    fzb: 10.97,
  },
  {
    name: '黑龙江',
    value: (956323967.43 / 100000000).toFixed(2),
    zbyj: 9.66,
    sgsej: 7.44,
    zb: 3.15,
    fzb: 14.01,
  },
  {
    name: '云南',
    value: (956323967.43 / 100000000).toFixed(2),
    zbyj: 13.61,
    sgsej: 14.64,
    zb: 12.89,
    fzb: 17.16,
  },
  {
    name: '贵州',
    value: (956323967.43 / 100000000).toFixed(2),
    zbyj: 27.35,
    sgsej: 25.48,
    zb: 23.33,
    fzb: 0.99,
  },
  {
    name: '广西',
    value: (956323967.43 / 100000000).toFixed(2),
    zbyj: 9.39,
    sgsej: 13.39,
    zb: 1.44,
    fzb: 20.16,
  },
  {
    name: '广东',
    value: (956323967.43 / 100000000).toFixed(2),
    zbyj: 14.97,
    sgsej: 8.79,
    zb: 8.92,
    fzb: 1.59,
  },
]
var option = {}
var geoCoordMap = {
  上海: [121.4648, 31.2891],
  东莞: [113.8953, 22.901],
  东营: [118.7073, 37.5513],
  中山: [113.4229, 22.478],
  临汾: [111.4783, 36.1615],
  临沂: [118.3118, 35.2936],
  丹东: [124.541, 40.4242],
  丽水: [119.5642, 28.1854],
  乌鲁木齐: [87.9236, 43.5883],
  佛山: [112.8955, 23.1097],
  保定: [115.0488, 39.0948],
  兰州: [103.5901, 36.3043],
  包头: [110.3467, 41.4899],
  北京: [116.4551, 40.2539],
  北海: [109.314, 21.6211],
  南京: [118.8062, 31.9208],
  南宁: [108.479, 23.1152],
  南昌: [116.0046, 28.6633],
  南通: [121.1023, 32.1625],
  厦门: [118.1689, 24.6478],
  台州: [121.1353, 28.6688],
  合肥: [117.29, 32.0581],
  呼和浩特: [111.4124, 40.4901],
  咸阳: [108.4131, 34.8706],
  哈尔滨: [127.9688, 45.368],
  唐山: [118.4766, 39.6826],
  嘉兴: [120.9155, 30.6354],
  大同: [113.7854, 39.8035],
  大连: [122.2229, 39.4409],
  天津: [117.4219, 39.4189],
  太原: [112.3352, 37.9413],
  威海: [121.9482, 37.1393],
  宁波: [121.5967, 29.6466],
  宝鸡: [107.1826, 34.3433],
  宿迁: [118.5535, 33.7775],
  常州: [119.4543, 31.5582],
  广州: [113.5107, 23.2196],
  廊坊: [116.521, 39.0509],
  延安: [109.1052, 36.4252],
  张家口: [115.1477, 40.8527],
  徐州: [117.5208, 34.3268],
  德州: [116.6858, 37.2107],
  惠州: [114.6204, 23.1647],
  成都: [103.9526, 30.7617],
  扬州: [119.4653, 32.8162],
  承德: [117.5757, 41.4075],
  拉萨: [91.1865, 30.1465],
  无锡: [120.3442, 31.5527],
  日照: [119.2786, 35.5023],
  昆明: [102.9199, 25.4663],
  杭州: [119.5313, 29.8773],
  枣庄: [117.323, 34.8926],
  柳州: [109.3799, 24.9774],
  株洲: [113.5327, 27.0319],
  武汉: [114.3896, 30.6628],
  汕头: [117.1692, 23.3405],
  江门: [112.6318, 22.1484],
  沈阳: [123.1238, 42.1216],
  沧州: [116.8286, 38.2104],
  河源: [114.917, 23.9722],
  泉州: [118.3228, 25.1147],
  泰安: [117.0264, 36.0516],
  泰州: [120.0586, 32.5525],
  济南: [117.1582, 36.8701],
  济宁: [116.8286, 35.3375],
  海口: [110.3893, 19.8516],
  淄博: [118.0371, 36.6064],
  淮安: [118.927, 33.4039],
  深圳: [114.5435, 22.5439],
  清远: [112.9175, 24.3292],
  温州: [120.498, 27.8119],
  渭南: [109.7864, 35.0299],
  湖州: [119.8608, 30.7782],
  湘潭: [112.5439, 27.7075],
  滨州: [117.8174, 37.4963],
  潍坊: [119.0918, 36.524],
  烟台: [120.7397, 37.5128],
  玉溪: [101.9312, 23.8898],
  珠海: [113.7305, 22.1155],
  盐城: [120.2234, 33.5577],
  盘锦: [121.9482, 41.0449],
  石家庄: [114.4995, 38.1006],
  福州: [119.4543, 25.9222],
  秦皇岛: [119.2126, 40.0232],
  绍兴: [120.564, 29.7565],
  聊城: [115.9167, 36.4032],
  肇庆: [112.1265, 23.5822],
  舟山: [122.2559, 30.2234],
  苏州: [120.6519, 31.3989],
  莱芜: [117.6526, 36.2714],
  菏泽: [115.6201, 35.2057],
  营口: [122.4316, 40.4297],
  葫芦岛: [120.1575, 40.578],
  衡水: [115.8838, 37.7161],
  衢州: [118.6853, 28.8666],
  西宁: [101.4038, 36.8207],
  西安: [109.1162, 34.2004],
  贵阳: [106.6992, 26.7682],
  连云港: [119.1248, 34.552],
  邢台: [114.8071, 37.2821],
  邯郸: [114.4775, 36.535],
  郑州: [113.4668, 34.6234],
  鄂尔多斯: [108.9734, 39.2487],
  重庆: [107.7539, 30.1904],
  金华: [120.0037, 29.1028],
  铜川: [109.0393, 35.1947],
  银川: [106.3586, 38.1775],
  镇江: [119.4763, 31.9702],
  长春: [125.8154, 44.2584],
  长沙: [113.0823, 28.2568],
  长治: [112.8625, 36.4746],
  阳泉: [113.4778, 38.0951],
  青岛: [120.4651, 36.3373],
  韶关: [113.7964, 24.7028],
}
//北京
var BJsheng = [
  '河北',
  '天津',
  '山东',
  '广东',
  '四川',
  '江苏',
  '河南',
  '辽宁',
  '陕西',
  '海南',
  '浙江',
  '山西',
  '福建',
  '湖南',
  '内蒙古',
  '安徽',
  '吉林',
  '甘肃',
  '黑龙江',
  '江西',
  '重庆市',
  '广西',
  '湖北',
  '宁夏',
  '上海',
  '云南',
  '贵州',
  '青海',
  '西藏',
  '新疆',
]
var BJshi = [
  '石家庄',
  '天津',
  '济南',
  '广州',
  '成都',
  '南京',
  '郑州',
  '沈阳',
  '西安',
  '海口',
  '杭州',
  '太原',
  '福州',
  '长沙',
  '呼和浩特',
  '合肥',
  '长春',
  '兰州',
  '哈尔滨',
  '南昌',
  '重庆',
  '南宁',
  '武汉',
  '银川',
  '上海',
  '昆明',
  '贵阳',
  '西宁',
  '拉萨',
  '乌鲁木齐',
]
var BJobj = {}
for (var i = 0; i < BJsheng.length; i++) {
  BJobj[BJshi[i]] = BJsheng[i]
}

var BJche = [
  2875, 737, 584, 472, 293, 278, 252, 235, 162, 149, 140, 126, 87, 79, 68, 53,
  50, 47, 38, 30, 29, 21, 21, 20, 20, 13, 7, 7, 3, 2,
]
var BJData = []
for (var i = 0; i < BJche.length; i++) {
  var arr = []
  var obj1 = {}
  obj1.name = '北京'
  var obj2 = {}
  obj2.name = BJshi[i]
  obj2.value = BJche[i]

  arr.push(obj1)
  arr.push(obj2)
  BJData.push(arr)
}

//上海
var SHsheng = [
  '江苏',
  '浙江',
  '安徽',
  '山东',
  '河南',
  '河北',
  '广东',
  '福建',
  '江西',
  '山西',
  '湖北',
  '广西',
  '北京市',
  '湖南',
  '辽宁',
  '四川',
  '黑龙江',
  '陕西',
  '天津',
  '贵州',
  '海南',
  '吉林',
  '云南',
  '内蒙古',
  '青海',
  '重庆',
  '甘肃',
  '新疆',
]
var SHshi = [
  '南京',
  '杭州',
  '合肥',
  '济南',
  '郑州',
  '石家庄',
  '广州',
  '福州',
  '南昌',
  '太原',
  '武汉',
  '南宁',
  '北京',
  '长沙',
  '沈阳',
  '成都',
  '哈尔滨',
  '西安',
  '天津',
  '贵阳',
  '海口',
  '长春',
  '昆明',
  '呼和浩特',
  '西宁',
  '重庆',
  '兰州',
  '乌鲁木齐',
]
var SHobj = {}
for (var i = 0; i < SHsheng.length; i++) {
  SHobj[SHshi[i]] = SHsheng[i]
}

var SHche = [
  1712, 833, 210, 126, 62, 54, 50, 46, 34, 27, 22, 15, 13, 13, 11, 11, 8, 8, 6,
  5, 5, 5, 4, 3, 2, 2, 1, 1,
]
console.log(SHche.length)
var SHData = []
for (var i = 0; i < SHche.length; i++) {
  var arr = []
  var obj1 = {}
  obj1.name = '上海'
  var obj2 = {}
  obj2.name = SHshi[i]
  obj2.value = SHche[i]

  arr.push(obj1)
  arr.push(obj2)
  SHData.push(arr)
}

var carPath =
  'path://M4560,4996.6c-530.4-68.2-932.1-239.8-1201.2-514.8c-156-159.9-508.9-803.4-598.6-1092c-50.7-161.9-52.7-384.2-11.7-840.5c39-421.2,42.9-386.1-54.6-432.9c-117-56.5-208.7-138.4-241.8-216.4c-23.4-58.5-23.4-72.2,7.8-136.5c44.8-93.6,93.6-99.4,263.2-31.2l134.6,54.6l58.5-58.5l58.5-58.5l-48.8-536.3C2822.5-3.2,2808.9-360.1,2846-1095.2c9.7-218.4,5.8-386.1-19.5-663c-66.3-723.5-2-1550.3,159.9-2039.7c72.1-216.4,157.9-366.6,278.8-487.5c87.8-89.7,142.3-122.9,304.2-189.2c349.1-146.3,805.3-257.4,1232.4-302.3c173.6-17.5,269.1-17.5,438.8,0c659.1,74.1,1347.5,298.3,1544.4,505.1c140.4,146.3,255.4,399.7,329.6,733.2c101.4,440.7,134.6,1197.3,80,1758.9c-42.9,432.9-46.8,838.5-11.7,982.8c40.9,165.8,9.8,733.2-107.2,1959.8l-50.7,524.6l58.5,56.6l56.6,56.6l150.1-62.4c175.5-74.1,228.1-64.3,265.2,48.8c39,122.9-42.9,235.9-251.6,341.3l-85.8,44.8l13.6,157.9c7.8,87.8,21.4,261.3,31.2,384.2c25.4,300.3,23.4,503.1-1.9,627.9c-29.3,128.7-397.8,863.9-514.8,1019.9c-222.3,298.3-563.6,489.5-1066.6,596.7C5470.7,5004.4,4797.9,5025.8,4560,4996.6z M5517.5,3073.9c444.6-76.1,811.2-255.5,1051.1-516.8c195-208.7,189.1-152.1,85.8-906.7c-48.8-358.8-93.6-657.2-97.5-661.1c-5.9-5.8-117,11.7-247.7,39c-544,111.2-762.4,134.6-1269.4,134.6c-522.6,2-717.6-19.5-1271.4-128.7c-169.6-33.1-312-56.5-315.9-52.6c-3.9,3.9-48.8,304.2-99.4,664.9l-89.7,657.2l48.8,85.8c56.5,93.6,232,273,356.9,362.7c255.4,183.3,663,313.9,1127.1,360.8C4936.4,3126.5,5338.1,3105.1,5517.5,3073.9z M6443.7-2179.4v-702l-70.2-76.1c-187.2-210.6-573.3-321.8-1197.3-347.1c-717.6-29.2-1302.6,101.4-1519.1,335.4l-80,87.8v692.3c0,380.2,7.8,692.2,15.6,692.2c9.8,0,81.9-17.5,161.9-37c319.8-81.9,618.1-107.3,1236.3-107.3c631.8,0,920.4,25.4,1255.8,113.1c91.6,25.3,173.6,46.8,183.3,48.8C6437.9-1479.4,6443.7-1793.3,6443.7-2179.4z'

var convertData = function (data) {
  // console.log(data);
  var res = []
  for (var i = 0; i < data.length; i++) {
    var dataItem = data[i]
    var fromCoord = geoCoordMap[dataItem[0].name]
    var toCoord = geoCoordMap[dataItem[1].name]
    if (fromCoord && toCoord) {
      res.push({
        fromName: dataItem[0].name,
        toName: dataItem[1].name,
        coords: [fromCoord, toCoord],
        value: dataItem[1].value,
      })
    }
  }
  return res
}

var color = ['#a6c84c', '#ffa022', '#46bee9']
var series = [
  {
    type: 'map',
    map: 'china',
    geoIndex: 0,
    aspectScale: 0.75, //长宽比
    showLegendSymbol: false, // 存在legend时显示
    label: {
      normal: {
        show: false,
      },
      emphasis: {
        show: false,
        textStyle: {
          color: '#fff',
        },
      },
    },
    roam: true,
    itemStyle: {
      normal: {
        areaColor: '#031525',
        borderColor: '#FFFFFF',
      },
      emphasis: {
        areaColor: '#2B91B7',
      },
    },

    data: data,
  },
]
;[
  ['北京', BJData],
  ['上海', SHData],
].forEach(function (item, i) {
  //console.log(item,i);
  series.push(
    {
      name: item[0],
      type: 'lines',
      zlevel: 1,
      effect: {
        show: true,
        period: 6,
        trailLength: 0.7,
        color: '#fff',
        symbolSize: 3,
      },
      lineStyle: {
        normal: {
          color: color[i],
          width: 0,
          curveness: 0.2,
        },
      },
      data: convertData(item[1]),
    },
    {
      name: item[0],
      type: 'lines',
      zlevel: 2,
      symbol: ['none', 'arrow'],
      symbolSize: 10,
      effect: {
        show: true,
        period: 6,
        trailLength: 0,
        symbol: carPath,
        symbolSize: [10, 15],
      },
      lineStyle: {
        normal: {
          color: color[i],
          width: 1,
          opacity: 0.6,
          curveness: 0.2,
        },
      },
      data: convertData(item[1]),
    },
    {
      name: item[0],
      type: 'effectScatter',
      coordinateSystem: 'geo',
      zlevel: 2,
      rippleEffect: {
        brushType: 'stroke',
      },
      label: {
        normal: {
          show: true,
          position: 'right',
          formatter: '{b}',
        },
      },
      symbolSize: function (val) {
        return val[2] / 300
      },
      itemStyle: {
        normal: {
          color: color[i],
        },
      },
      data: item[1].map(function (dataItem) {
        //debugger
        console.log(i)
        console.log(dataItem)
        var name = ''
        if (dataItem[0].name == '北京') {
          name = BJobj[dataItem[1].name]
        }
        if (dataItem[0].name == '上海') {
          name = SHobj[dataItem[1].name]
        }
        if (dataItem[0].name == '广州') {
          name = GZobj[dataItem[1].name]
        }

        return {
          name: name ? name : dataItem[1].name,
          value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value]),
        }
      }),
    }
  )
})

option = {
  tooltip: {
    trigger: 'item',
    formatter: function (params) {
      // console.log(params.seriesType)
      if (params.seriesType == 'map') {
        return (
          '<span style="float:left;">' +
          params.name +
          '</span></br>' +
          '<span style="float:left;">总部一级: ' +
          params.data.zbyj +
          '亿元</span></br>' +
          '<span style="float:left;">省公司二级: ' +
          params.data.sgsej +
          '亿元</span></br>' +
          '<span style="float:left;">招标采购: ' +
          params.data.zb +
          '亿元</span></br>' +
          '<span style="float:left;">非招标采购: ' +
          params.data.fzb +
          '亿元</span>'
        )
      } else {
        return
      }
    },
  },
  visualMap: {
    type: 'continuous',
    orient: 'horizontal',
    itemWidth: 10,
    itemHeight: 300,
    text: ['高', '低'],
    showLabel: true,
    seriesIndex: [0],
    min: 0,
    max: 100,
    inRange: {
      color: ['#96dee8', '#3fb1e3', '#a0a7e6', '#626c91'],
    },
    textStyle: {
      color: '#7B93A7',
    },
    bottom: 10,
    left: 'left',
  },
  geo: {
    map: 'china',
    left: '250',
    right: '250',
    layoutSize: '80%',
    label: {
      emphasis: {
        show: false,
      },
    },
    itemStyle: {
      emphasis: {
        areaColor: '#fff464',
      },
    },
  },
  series: series,
}

myChart.setOption(option)
myChart.on('click', function (params) {
  if (params.seriesType == 'map') {
    let aBody = parent.document.getElementsByTagName('body')[0]
    $('#btn').click(function () {
      aBody.scrollIntoView({
        block: 'start',
        behavior: 'smooth',
      })
    })
    $('#btn').show()
    $('#tabs_content', parent.document).show()
    $('#tabs_content iframe', parent.document).attr('src', 'ssfsiframe')
    $('.active', parent.document).removeClass('active')
    $('#ssfs_iframe', parent.document).addClass('active')
  }
})
