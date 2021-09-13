/**
 * Created by fenglei.tian on 2019/11/4.
 */
const GreenTheme={
    "color": [
        '#0083d7',
        '#67e0e3',
        '#32c5e9',
        '#9fe6b8',
        '#84e4f3',
        '#ff9f7f',
        '#fb7293'
    ],
    "backgroundColor": "transparent",
    "textStyle": {},
    "title": {
        "textStyle": {
            "color": "#0fd2ff"
        },
        "subtextStyle": {
            "color": "#0fd2ff"
        }
    },
    "line": {
        "itemStyle": {
            "normal": {
                "borderWidth": "2"
            }
        },
        "lineStyle": {
            "normal": {
                "width": "3"
            }
        },
        "symbolSize": "8",
        "symbol": "emptyCircle",
        "smooth": false
    },
    "radar": {
        "itemStyle": {
            "normal": {
                "borderWidth": "2"
            }
        },
        "lineStyle": {
            "normal": {
                "width": "3"
            }
        },
        "symbolSize": "8",
        "symbol": "emptyCircle",
        "smooth": false
    },
    "bar": {
        "itemStyle": {
            barBorderRadius:[10, 10, 0, 0],
            opacity:0.75,
            "normal": {

                "barBorderWidth": 10,
                "barBorderColor": "#ccc",
                "color":"new echarts.graphic.LinearGradient(0, 0, 0, 1, [{offset: 0, color: '#fccb05'}, {offset: 1,color: '#f5804d'}])",
            },
            "emphasis": {
                "barBorderWidth": 0,
                "barBorderColor": "#ccc"
            },

        },
        barMinHeight:10,
        barWidth:20,
        label: {
            verticalAlign: 'middle',
            fontWeight: 900,
            fontSize:16,
            color: '#fff'
        }
    },
    "pie": {
        label:{
            color:'#fff',

        },
        labelLine:{
            lineStyle:{
                color:'#fff',
            }

        },
        minAngle:10,
        "itemStyle": {
            "normal": {
                "borderWidth": 0,
                "borderColor": "#ccc"
            },
            "emphasis": {
                "borderWidth": 0,
                "borderColor": "#ccc"
            }
        }
    },
    "effectscatter": {
        "itemStyle": {
            "normal": {
                color:'#f1bb4c',
                "borderWidth": 0,
                "borderColor": "#ccc"
            },
            "emphasis": {
                "borderWidth": 0,
                "borderColor": "#ccc"
            }
        }
    },
    "scatter": {
        "itemStyle": {
            "normal": {
                color:'#fff',
                "borderWidth": 10,
                "borderColor": "#fff"
            },
            "emphasis": {
                "borderWidth": 0,
                "borderColor": "#ccc"
            }
        },
        label: {
            verticalAlign: 'middle',
            fontWeight: 900,
            fontSize:16,
            color:"rgba(255,255,255,1)"
        },
        symbolSize:15,
    },
    "boxplot": {
        "itemStyle": {
            "normal": {
                "borderWidth": 0,
                "borderColor": "#ccc"
            },
            "emphasis": {
                "borderWidth": 0,
                "borderColor": "#ccc"
            }
        }
    },
    "parallel": {
        "itemStyle": {
            "normal": {
                "borderWidth": 0,
                "borderColor": "#ccc"
            },
            "emphasis": {
                "borderWidth": 0,
                "borderColor": "#ccc"
            }
        }
    },
    "sankey": {
        "itemStyle": {
            "normal": {
                "borderWidth": 0,
                "borderColor": "#ccc"
            },
            "emphasis": {
                "borderWidth": 0,
                "borderColor": "#ccc"
            }
        }
    },
    "funnel": {
        "itemStyle": {
            "normal": {
                "borderWidth": 0,
                "borderColor": "#ccc"
            },
            "emphasis": {
                "borderWidth": 0,
                "borderColor": "#ccc"
            }
        }
    },
    "gauge": {
        "itemStyle": {
            "normal": {
                "borderWidth": 0,
                "borderColor": "#ccc"
            },
            "emphasis": {
                "borderWidth": 0,
                "borderColor": "#ccc"
            }
        }
    },
    "candlestick": {
        "itemStyle": {
            "normal": {
                "color": "#e6a0d2",
                "color0": "transparent",
                "borderColor": "#e6a0d2",
                "borderColor0": "#3fb1e3",
                "borderWidth": "2"
            }
        }
    },
    "graph": {
        "itemStyle": {
            "normal": {
                "borderWidth": 0,
                "borderColor": "#ccc"
            }
        },
        "lineStyle": {
            "normal": {
                "width": "1",
                "color": "#cccccc"
            }
        },
        "symbolSize": "8",
        "symbol": "emptyCircle",
        "smooth": false,
        "color": [
            "#3fb1e3",
            "#6be6c1",
            "#626c91",
            "#a0a7e6",
            "#c4ebad",
            "#96dee8"
        ],
        "label": {
            "normal": {
                "textStyle": {
                    "color": "#ffffff"
                }
            }
        }
    },
    "map": {
        "itemStyle": {
            "normal": {
                "areaColor": "#eeeeee",
                "borderColor": "#aaaaaa",
                "borderWidth": 0.5
            },
            "emphasis": {
                "areaColor": "rgba(63,177,227,0.25)",
                "borderColor": "#3fb1e3",
                "borderWidth": 1
            }
        },
        "label": {
            "normal": {
                "textStyle": {
                    "color": "#ffffff"
                }
            },
            "emphasis": {
                "textStyle": {
                    "color": "rgb(63,177,227)"
                }
            }
        }
    },
    "geo": {
        "itemStyle": {
            "normal": {
                "areaColor": "#eeeeee",
                "borderColor": "#aaaaaa",
                "borderWidth": 0.5
            },
            "emphasis": {
                "areaColor": "rgba(63,177,227,0.25)",
                "borderColor": "#3fb1e3",
                "borderWidth": 1
            }
        },
        "label": {
            "normal": {
                "textStyle": {
                    "color": "#000"
                }
            },
            "emphasis": {
                "textStyle": {
                    "color": "rgb(63,177,227)"
                }
            }
        }
    },
    "categoryAxis": {
        "axisLine": {
            "show": true,
            "lineStyle": {
                "color": "#fff"
            }
        },
        "axisTick": {
            "show": true,
            "lineStyle": {
                "color": "#fff"
            }
        },
        "axisLabel": {
            "show": true,
            "textStyle": {
                "color": "#fff",
                fontWeight:900,
                fontSize:14,
            }
        },
        "splitLine": {
            "show": false,
            "lineStyle": {
                "color": [
                    "#eeeeee"
                ]
            }
        },
        "splitArea": {
            "show": false,
            "areaStyle": {
                "color": [
                    "rgba(250,250,250,0.05)",
                    "rgba(200,200,200,0.02)"
                ]
            }
        }
    },
    "valueAxis": {
        "axisLine": {
            "show": true,
            "lineStyle": {
                "color": "#fff"
            }
        },
        "axisTick": {
            "show": true,
            "lineStyle": {
                "color": "#fff"
            }
        },
        "axisLabel": {
            "show": true,
            "textStyle": {
                "color": "#fff",
                fontWeight:900,
                fontSize:14,
            }
        },
        "splitLine": {
            "show": false,
            "lineStyle": {
                "color": [
                    "#eeeeee"
                ]
            }
        },
        "splitArea": {
            "show": false,
            "areaStyle": {
                "color": [
                    "rgba(250,250,250,0.05)",
                    "rgba(200,200,200,0.02)"
                ]
            }
        }
    },
    "logAxis": {
        "axisLine": {
            "show": true,
            "lineStyle": {
                "color": "#6d8294"
            }
        },
        "axisTick": {
            "show": false,
            "lineStyle": {
                "color": "#333"
            }
        },
        "axisLabel": {
            "show": true,
            "textStyle": {
                "color": "#6d8294"
            }
        },
        "splitLine": {
            "show": true,
            "lineStyle": {
                "color": [
                    "#eeeeee"
                ]
            }
        },
        "splitArea": {
            "show": false,
            "areaStyle": {
                "color": [
                    "rgba(250,250,250,0.05)",
                    "rgba(200,200,200,0.02)"
                ]
            }
        }
    },
    "timeAxis": {
        "axisLine": {
            "show": true,
            "lineStyle": {
                "color": "#cccccc"
            }
        },
        "axisTick": {
            "show": false,
            "lineStyle": {
                "color": "#333"
            }
        },
        "axisLabel": {
            "show": true,
            "textStyle": {
                "color": "#000"
            }
        },
        "splitLine": {
            "show": true,
            "lineStyle": {
                "color": [
                    "#eeeeee"
                ]
            }
        },
        "splitArea": {
            "show": false,
            "areaStyle": {
                "color": [
                    "rgba(250,250,250,0.05)",
                    "rgba(200,200,200,0.02)"
                ]
            }
        }
    },
    "toolbox": {
        "iconStyle": {
            "normal": {
                "borderColor": "#999999"
            },
            "emphasis": {
                "borderColor": "#666666"
            }
        }
    },
    "legend": {
        "textStyle": {
            "color": "#fff"
        }
    },
    "tooltip": {
        "axisPointer": {
            "lineStyle": {
                "color": "#cccccc",
                "width": 1
            },
            "crossStyle": {
                "color": "#cccccc",
                "width": 1
            }
        }
    },
    "timeline": {
        "lineStyle": {
            "color": "#626c91",
            "width": 1
        },
        "itemStyle": {
            "normal": {
                "color": "#626c91",
                "borderWidth": 1
            },
            "emphasis": {
                "color": "#626c91"
            }
        },
        "controlStyle": {
            "normal": {
                "color": "#626c91",
                "borderColor": "#626c91",
                "borderWidth": 0.5
            },
            "emphasis": {
                "color": "#626c91",
                "borderColor": "#626c91",
                "borderWidth": 0.5
            }
        },
        "checkpointStyle": {
            "color": "#3fb1e3",
            "borderColor": "rgba(63,177,227,0.15)"
        },
        "label": {
            "normal": {
                "textStyle": {
                    "color": "#626c91"
                }
            },
            "emphasis": {
                "textStyle": {
                    "color": "#626c91"
                }
            }
        }
    },
    "visualMap": {
        "color": [
            "#2a99c9",
            // '#3baf?ff',
            "#afe8ff",
            // '#3feed4',
            // '#00d488',
            // '#afa3f5',

        ]
    },
    "dataZoom": {
        "backgroundColor": "rgba(255,255,255,0)",
        "dataBackgroundColor": "rgba(222,222,222,1)",
        "fillerColor": "rgba(114,230,212,0.25)",
        "handleColor": "#cccccc",
        "handleSize": "100%",
        "textStyle": {
            "color": "#999999"
        }
    },
    "markPoint": {
        "label": {
            "normal": {
                "textStyle": {
                    "color": "#ffffff"
                }
            },
            "emphasis": {
                "textStyle": {
                    "color": "#ffffff"
                }
            }
        }
    },
    "liquidFill":{
        outline: {
            show: true,
            itemStyle: {
                opacity: 1, // 边框的透明度   默认为 1
                borderWidth: 1, // 边框的宽度
                shadowBlur: 1, // 边框的阴影范围 一旦设置了内外都有阴影
                shadowColor: '#fff', // 边框的阴影颜色,
                borderColor: '#31C5C0' // 边框颜色
            }
        },
        backgroundStyle: {
            borderWidth: 2,
            color: '#fff'
        },
        itemStyle: {
            color: '#31C5C0', // 水球显示的背景颜色
            opacity: 1, // 波浪的透明度
            shadowBlur: 10 // 波浪的阴影范围
        },
    }
}