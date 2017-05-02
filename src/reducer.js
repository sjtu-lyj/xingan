import {STAR,UPDATE,ADD,UPDATEID,ONID,DELETE} from './action';

var tasks_init=[
  {
    id:0,
    title:"hello title",
    star:true,
    p:"reducer componentWillMount"
  },{
    id:1,
    star:false,
    title:"e.target.value",
    p:"onChange"
  },{
    id:2,
    star:false,
    title:"信息安全竞赛\n",
    p:"主要是在模仿wiznote的界面在实现\nheader和主要内容相互覆盖，暂时是用margin来处理，但是有些奇怪\n没有实现可编辑功能？？\n搜索框还是放在左边悬浮比较好"
  },{
    id:3,
    star:false,
    title:"计算机组成大作业",
    p:"比较是用有符号数还是无符号数\n dw为什么只能0-9开头？？"
  },{
    id:4,
    star:false,
    title:"汇编",
    p:"push SI+2 这种写法不可取"
  }
]

function todos(state={tasks: tasks_init,isnewnote:false, isnote:0},action){
  switch(action.type){
    case UPDATE:
      return {tasks: action.tasks}
    case ADD:
      var t=state.tasks
      console.log("ADD")
      return {...state,
        tasks:[...t,{id:t.length+1,p:action.p,title:action.title,star:false}]}
    case UPDATEID:
      console.log("what happened??")
      var t=state.tasks
      t[action.id]["title"]=action.data.title
      t[action.id]["p"]=action.data.p
      return {...state,task: t}
    case ONID:
      console.log("reducer onid: "+action.id)
      return {...state,isnote:action.id}
    case STAR:
      var t=state.tasks
      t[state.isnote]["star"]=!t[state.isnote]["star"]
      return {...state,tasks: t}
    case DELETE:
      var t=state.tasks.filter(function(x){
        return(x.id != state.isnote)
      })
      console.log(t)
      return {...state,tasks: t}
    default:
      return state
  }
}

export default todos
