(function () {
    var chart = echarts.init(document.querySelector('.fullscreen'));
    // 指定配置和数据
    var option = {
        toolbox: {
            show: true,
            feature: {
                myFull: {
                    show: true,
                    title: '全屏查看',
                    icon: "path://M432.45,595.444c0,2.177-4.661,6.82-11.305,6.82c-6.475,0-11.306-4.567-11.306-6.82s4.852-6.812,11.306-6.812C427.841,588.632,432.452,593.191,432.45,595.444L432.45,595.444z M421.155,589.876c-3.009,0-5.448,2.495-5.448,5.572s2.439,5.572,5.448,5.572c3.01,0,5.449-2.495,5.449-5.572C426.604,592.371,424.165,589.876,421.155,589.876L421.155,589.876z M421.146,591.891c-1.916,0-3.47,1.589-3.47,3.549c0,1.959,1.554,3.548,3.47,3.548s3.469-1.589,3.469-3.548C424.614,593.479,423.062,591.891,421.146,591.891L421.146,591.891zM421.146,591.891",
                    onclick: (e) => {
                        if (fullscreen) {
                            this.exitFullScreen();
                        } else {
                            this.showFullScreen(e.getOption());
                        }

                        // this.showFullScreen(e.getOption())
                    },
                }
            }
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: ['Sales']
        },
        xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                data: [120, 200, 150, 80, 70, 110, 130],
                type: 'bar'
            }
        ]
    };
    chart.setOption(option);

    // 重新把配置好的新数据给实例对象
    chart.setOption(option);
    window.addEventListener("resize", function () {
        chart.resize();
    });


})();

var fullscreen = false;
// 全屏显示
function showFullScreen(option) {
    fullscreen = true;
    var chart = echarts.init(document.querySelector('.fullscreen'));
    chart.setOption(option);
    var fullScreenContainer = document.querySelector('.fullscreen');
    if (fullScreenContainer.requestFullScreen) {
        fullScreenContainer.requestFullScreen();
    } else if (fullScreenContainer.webkitRequestFullScreen) {
        fullScreenContainer.webkitRequestFullScreen();
    } else if (fullScreenContainer.mozRequestFullScreen) {
        fullScreenContainer.mozRequestFullScreen();
    } else if (fullScreenContainer.msRequestFullScreen) {
        fullScreenContainer.msRequestFullScreen();
    }

    chart.resize();
}

// 退出全屏
function exitFullScreen() {
    fullscreen = false;
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
    } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
    } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
    }
}   