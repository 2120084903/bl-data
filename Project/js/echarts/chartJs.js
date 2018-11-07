//----------------------------------政府部门------------------------------------------
require.config({
    paths: {
        echarts: 'http://echarts.baidu.com/build/dist'
    }
});
require(
    [
        'echarts',
        'echarts/theme/macarons',
        'echarts/chart/bar',
        'echarts/chart/map',
        'echarts/chart/k',
        'echarts/chart/pie',
        'echarts/chart/force',
        'echarts/chart/line'
    ],

    function (ec, theme) {
        function randomData() {
            return Math.round(Math.random()*1000);
        }
        // 基于准备好的dom，初始化echarts图表
        var myChart = ec.init(document.getElementById('zfbm2'), 'macarons');
        var
            option = {
                title : {
                    text: '某站点用户访问来源',
                    subtext: '纯属虚构',
                    x:'center'
                },
                tooltip : {
                    trigger: 'item',
                    formatter: "{a} <br/>{b} : {c} ({d}%)"
                },
                legend: {
                    orient: 'vertical',
                    left: 'left',
                    data: ['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
                },
                series : [
                    {
                        name: '访问来源',
                        type: 'pie',
                        radius : '55%',
                        center: ['50%', '60%'],
                        data:[
                            {value:335, name:'直接访问'},
                            {value:310, name:'邮件营销'},
                            {value:234, name:'联盟广告'},
                            {value:135, name:'视频广告'},
                            {value:1548, name:'搜索引擎'}
                        ],
                        itemStyle: {
                            emphasis: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                            }
                        }
                    }
                ]
            };


        // 为echarts对象加载数据
        myChart.setOption(option);
    }
);


//----------------------------------相关企业------------------------------------------
require.config({
    paths: {
        echarts: 'http://echarts.baidu.com/build/dist'
    }
});
require(
    [
        'echarts',
        'echarts/theme/macarons',
        'echarts/chart/bar',
        'echarts/chart/map',
        'echarts/chart/k',
        'echarts/chart/pie',
        'echarts/chart/force',
        'echarts/chart/line'
    ],

    function (ec, theme) {
        function randomData() {
            return Math.round(Math.random()*1000);
        }
        // 基于准备好的dom，初始化echarts图表
        var myChart = ec.init(document.getElementById('xgqy2'), 'macarons');
        var
            option = {
                tooltip : {
                    trigger: 'axis'
                },
                legend: {
                    textStyle: {
                        color: 'rgba(255,255,255,.7)'
                    },
                    data:['相关企业']
                },
                toolbox: {
                    show : true,
                    feature : {
                        mark : {show: false},
                        dataView : {show: false, readOnly: false},
                        magicType : {show: true, type: ['line', 'bar']},
                        restore : {show: true},
                        saveAsImage : {show: false}
                    }

                },
                calculable : true,
                xAxis : [
                    {
                        type : 'category',
                        data : ['滴滴','滴滴','滴滴','滴滴','滴滴','滴滴','滴滴','滴滴','滴滴','滴滴','滴滴','滴滴']
                    }
                ],
                yAxis : [
                    {
                        type : 'value'
                    }
                ],
                series : [
                    {
                        name:'相关企业',
                        type:'bar',
                        barWidth : 20,//柱图宽度
                        barMaxWidth:30,//最大宽度
                        data:[2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3],
                        markPoint : {
                            data : [
                                {name : '年最高', value : 182.2, xAxis: 7, yAxis: 183, symbolSize:18},
                                {name : '年最低', value : 2.3, xAxis: 11, yAxis: 3}
                            ]
                        },
                        labelLine: {
                            normal: {
                                color:'red',
                                show: false
                            }
                        },
                        itemStyle:{
                            normal:{
                                color:'#4ad2ff'
                            }
                        },
                        markLine : {
                            data : [
                                {type : 'average', name : '平均值'}
                            ]
                        }
                    }
                ]
            };
        // 为echarts对象加载数据
        myChart.setOption(option);
    }
);