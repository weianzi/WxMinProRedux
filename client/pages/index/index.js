const { connect } = require('../../libs/wechat-weapp-redux');
const { getTime } = require('../../actions/index');

const pageConfig = {
    data: {
        time: '点击按钮3秒后显示时间',
    },
    getMytime: function() {
        this.getTime();
    }
};

const mapStateToData = state => ({
    time: state._time.time,
});

const mapDispatchToPage = dispatch => ({
    getTime: event => dispatch(getTime()),
});

const nextPageConfig = connect(mapStateToData, mapDispatchToPage)(pageConfig);
Page(nextPageConfig);
