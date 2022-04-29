import { h } from 'vue';
import { Icon } from '@iconify/vue';
export function transformAuthRoutesToSearchMenus(routes :any): any[] {

   let menuRouter :any = []

   routes.forEach(route=>{
    let {meta,name,path} = route 
    let childrenMenu = []
     if(route.children){
      childrenMenu =  transformAuthRoutesToSearchMenus(route.children)
     }
     let menu = {
       key: name,
       label: meta.title,
       routeName:name,
       routePath: path,
       children:childrenMenu.length <1 ? 'undefind' : childrenMenu
     }
     if(childrenMenu.length <1){
       delete menu.children
     }
    //  console.log(menu,'menu')
     menuRouter.push(menu)

   })
return menuRouter
}


