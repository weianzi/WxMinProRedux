//index.js
const { connect } = require('../../libs/wechat-weapp-redux.js')
const { addTodo, setVisibilityFilter, toggleTodo, getTime } = require('../../actions/index.js')
const Promise = require('../../libs/es6-promise.min.js').Promise;

const pageConfig = {
    data: {
        todos: [],
        filters: [{ key: 'SHOW_ALL', text: '全部' }, { key: 'SHOW_ACTIVE', text: '正在进行' }, { key: 'SHOW_COMPLETED', text: '已完成' }]
    },
    handleCheck: function(e) {
        const id = parseInt(e.target.id)
        this.toggleTodo(id);
    },
    applyFilter: function(e) {
        this.setVisibilityFilter(e.target.id)
    },
    getMytime: function(){
        this.getTime();
    },
    onLoad: function() {
        return new Promise((resolve, reject) => {
            console.log(promise)
            resolve()
        })
        console.log('on load')
    },
    onUnload: function() {
        console.log('on unload')
    }
}

const filterTodos = (todos, filter) => {
    switch (filter) {
        case 'SHOW_ALL':
            return todos
        case 'SHOW_COMPLETED':
            return todos.filter(t => t.completed)
        case 'SHOW_ACTIVE':
            return todos.filter(t => !t.completed)
        default:
            throw new Error('Unknown filter: ' + filter)
    }
}

const mapStateToData = state => ({
    todos: filterTodos(state.todos, state.visibilityFilter),
    visibilityFilter: state.visibilityFilter,
    time: state._time.time
})

const mapDispatchToPage = dispatch => ({
    setVisibilityFilter: filter => dispatch(setVisibilityFilter(filter)),
    toggleTodo: id => dispatch(toggleTodo(id)),
    addTodo: event => dispatch(addTodo(event.detail.value.todo)),
    getTime: event => dispatch(getTime(2000))
})

const nextPageConfig = connect(mapStateToData, mapDispatchToPage)(pageConfig)
Page(nextPageConfig);
