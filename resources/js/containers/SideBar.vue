<template>
    <div class="sidebar" @mouseenter="isMenuOwer=true" @mouseleave="isMenuOwer=false" @touchstart="isMenuOwer=true">
        <!-- Панель главного меню -->
        <div class="main-menu">
            <vue-perfect-scrollbar class="scroll" :settings="{ suppressScrollX: true, wheelPropagation: false }" >
                <ul class="list-unstyled">

                    <li :class="{ active : selectedParentMenu === 'dislocation' }"><a @click.prevent="openSubMenu($event, 'dislocation')" href="#dislocation"><i class=""></i>Дислокация</a> </li>
                    <li :class="{ active : selectedParentMenu === 'vslpositions' }"><a @click.prevent="openSubMenu($event, 'vslpositions')" href="#pages"><i class=""></i>Суда - позиции </a> </li>
                    <router-link :class="{ active : selectedParentMenu === 'e-visirovanie' }" @click.native="changeSelectedParentHasNoSubmenu('e-visirovanie')" to="#" tag="li"><a><i class=""></i>Электронное визирование</a> </router-link>

                </ul>
            </vue-perfect-scrollbar>
        </div>

        <!-- Подъменю -->
        <div class="sub-menu">
            <vue-perfect-scrollbar class="scroll" :settings="{ suppressScrollX: true, wheelPropagation: false }" >
                <ul class="list-unstyled" data-link="dislocation" :class="{ 'd-block' :selectedParentMenu === 'dislocation' }">

                    <router-link tag="li" :to="{name: 'Карта судов ВП'}"><a><i></i><span>Карта судов ВП</span></a></router-link>
                    <router-link tag="li" :to="{name: 'Текущая дислокация'}"><a><i></i><span>Текущая дислокация</span></a></router-link>
                    <router-link tag="li" to="#"><a><i></i><span>Итоги рейсов</span></a></router-link>

                </ul>
            </vue-perfect-scrollbar>
        </div>
    </div>
</template>

<script>
    import { mapGetters, mapMutations } from 'vuex'
    import { subHiddenBreakpoint, menuHiddenBreakpoint } from '../vars'
    export default {
        name: "SideBar",
        data() {
            return {
                selectedParentMenu: '',
                isMenuOver: false
            }
        },
        mounted() {
            this.selectMenu()
            window.addEventListener('resize', this.handleWindowResize)
            document.addEventListener('click', this.returnSelectedMenu)
            this.handleWindowResize()
        },
        beforeDestroy() {
            document.removeEventListener('click', this.returnSelectedMenu)
            window.removeEventListener('resize', this.handleWindowResize)
        },

        methods: {
            ...mapMutations(['changeSideMenuStatus', 'addMenuClassname', 'changeSelectedMenuHasSubItems']),
            selectMenu() {
                const currentParentUrl = this.$route.path.split('/').filter(x => x !== '')[1]
                if (currentParentUrl !== undefined || currentParentUrl !== null) {
                    console.log(currentParentUrl)
                    this.selectedParentMenu = currentParentUrl.toLowerCase()
                } else {
                    this.selectedParentMenu = 'dislocation'
                }
            },
            changeSelectedParentHasNoSubmenu(parentMenu) {
                this.SelectedParentMenu = parentMenu
                this.changeSelectedMenuHasSubItems(false)
                this.changeSideMenuStatus({ step: 0, classNames: this.menuType })
            },
            openSubMenu(e, selectedParent) {
                this.changeSelectedMenuHasSubItems(true)

                const currentClasses = this.menuType ? this.menuType.split(' ').filter(x => x !== '') : ''

                if (!currentClasses.includes('menu-mobile')) {
                    if (
                        currentClasses.includes('menu-sub-hidden') &&
                        (this.menuClickCount === 2 || this.menuClickCount === 0)
                    ) {
                        this.changeSideMenuStatus({ step: 3, classNames: this.menuType })
                    } else if (
                        currentClasses.includes('menu-hidden') &&
                        (this.menuClickCount === 1 || this.menuClickCount === 3)
                    ) {
                        this.changeSideMenuStatus({ step: 2, classNames: this.menuType })
                    } else if (
                        currentClasses.includes('menu-default') &&
                        !currentClasses.includes('menu-sub-hidden') &&
                        (this.menuClickCount === 1 || this.menuClickCount === 3)
                    ) {
                        this.changeSideMenuStatus({ step: 0, classNames: this.menuType })
                    }
                } else {
                    this.addMenuClassname({ className: 'sub-show-temporary', currentClasses: this.menuType })
                }
                this.selectedParentMenu = selectedParent
            },

            addEvents() {
                document.addEventListener('click', this.handleDocumentClick)
            },
            removeEvents() {
                document.removeEventListener('click', this.handleDocumentClick)
            },
            returnSelectedMenu() {
                if (!this.isMenuOwer) {
                    this.selectMenu()
                }
            },
            handleDocumentClick (e) {
                if (!this.isMenuOwer) {
                    let cont = true
                    e.path.map(p => {
                        if (p.nodeName !== 'svg' && p.className !== undefined && p.className.indexOf('menu-button') > -1) {
                            cont = false
                        }
                    })
                    if (cont) {
                        this.toggle()
                    }
                }
            },
            toggle() {
                const currentClasses = this.menuType.split(' ').filter(x => x !== '')
                if (currentClasses.includes('menu-sub-hidden') && this.menuClickCount === 3) {
                    this.changeSideMenuStatus({ step: 2, classNames: this.menuType })
                } else if (
                    currentClasses.includes('menu-hidden') || currentClasses.includes('menu-mobile')
                ) {
                    this.changeSideMenuStatus({ step: 0, classNames: this.menuType })
                }
            },

            // Ресайзим
            handleWindowResize(event) {
                if (event && !event.isTrusted) {
                    return
                }
                let nextClasses = this.getMenuClassesForResize(this.menuType)
                this.changeSideMenuStatus({ step: 0, classNames: nextClasses.join(' ') })
            },
            getMenuClassesForResize(classes) {
                let nextClasses = classes.split(' ').filter(x => x !== '')
                const windowWidth = window.innerWidth

                if (windowWidth < menuHiddenBreakpoint) {
                    nextClasses.push('menu-mobile')
                } else if (windowWidth < subHiddenBreakpoint) {
                    nextClasses = nextClasses.filter(x => x !== 'menu-mobile')
                    if (nextClasses.includes('menu-default') &&
                        !nextClasses.includes('menu-sub-hidden')) {
                        nextClasses.push('menu-sub-hidden')
                    }
                } else {
                    nextClasses = nextClasses.filter(x => x !== 'menu-mobile')
                    if (nextClasses.includes('menu-default') &&
                        nextClasses.includes('menu-sub-hidden')) {
                        nextClasses = nextClasses.filter(x => x !== 'menu-sub-hidden')
                    }
                }
                return nextClasses
            },

            // Устанавливаем тип меню по умолчанию
            changeDefaultMenuType(containerClassnames) {
                let nextClasses = this.getMenuClassesForResize(containerClassnames)
                this.changeSideMenuStatus({ step: 0, classNames: nextClasses.join(' ') })
            }
        },
        computed: {
            ...mapGetters({
                menuType: 'getMenuType',
                menuClickCount: 'getMenuClickCount',
                selectedMenuHasSubItems: 'getSelectedMenuHasSubItems'
            })
        },
        watch: {
            menuType: function(val) {
                if (val.indexOf('show-temporary') > -1) {
                    this.addEvents()
                } else {
                    this.removeEvents()
                }
            },
            '$route' (to, from) {
                if (to.path !== from.path) {
                    this.changeSideMenuStatus({ step: 0, classNames: this.menuType} )
                    this.selectMenu()
                    window.scrollTo(0, top)
                }
            }
        }
    }
</script>

<style scoped>

</style>
