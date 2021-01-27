<template>
    <nav class="navbar fixed-top">
        <div class="d-flex align-items-center navbar-left">
            <a href="#" class="menu-button d-none d-md-block"
               @click.prevent="changeSideMenuStatus({ step :menuClickCount+1, classNames:menuType})">
                <menu-icon />
            </a>
            <a href="#" class="menu-button-mobile d-xs-block d-sm-block d-md-none"
               @click.prevent="changeSideMenuForMobile(menuType)">
                <mobile-menu-icon />
            </a>
            <div :class="{'search':true, 'mobileView':isMobileSearch}"
                 ref="SearchContainer"
                 @mouseenter="isSearchOver=true"
                 @mouseleave="isSearchOver=false">
                <b-input-group>
                    <b-form-input
                        placeholder="Поиск"
                        @keypress.native.enter="search"
                        v-model="searchKeyword">
                    </b-form-input>
                    <b-input-group-append>
                        <span class="search-icon" @click="searchClick">
                            <font-awesome-icon fas icon="search"></font-awesome-icon>
                            <!--i class="simple-icon-magnifier"></i-->
                        </span>
                    </b-input-group-append>
                </b-input-group>
            </div>
            <div class="d-inline-block">
                <span class="ml-2">
                    <font-awesome-icon fab icon="periscope" size="2x"></font-awesome-icon>
                </span>
                <b-dropdown id="geo-loc" class="geoloc-button ml-2" variant="light" size="sm" toggle-class="geo-button">
                    <template slot="button-content">
                        <span class="name">{{ defaultGeoLoc }} </span>
                    </template>
                    <b-dropdown-item
                        v-for="(g, index) in geolocOptions"
                        :key="index"
                        @click="changeGeoLoc(g.id)"
                    >{{ g.name }}</b-dropdown-item>
                    <!--b-dropdown-item @click="changeGeoLoc">Санкт-Петербург</b-dropdown-item-->
                </b-dropdown>
            </div>
        </div>
        <router-link class="navbar-logo" tag="a" to="/">
            <span class="logo d-none d-sm-block"></span>
            <span class="logo-mobile d-block d-sm-none"></span>
        </router-link>
        <!--a class="navbar-logo" href="/">
            <span class="logo d-none d-xs-block"></span>
            <span class="logo-mobile d-block d-xs-none"></span>
        </a-->
        <div class="navbar-right">
            <WeatherWidget></WeatherWidget>
            <div class="user d-inline-block">
                <b-dropdown class="dropdown-menu-right" right variant="empty" toggle-class="p-0" menu-class="mt-3" no-caret>
                    <template v-slot:button-content>
                        <span class="name mr-1">Анонимный пользователь</span>
                        <span>
                            <img alt="" src=""/>
                        </span>
                    </template>
                </b-dropdown>
            </div>

        </div>
    </nav>
</template>

<script>
    import { library } from '@fortawesome/fontawesome-svg-core'
    import { faSpinner, faSearch  as fasSearch } from "@fortawesome/free-solid-svg-icons"
    import { fas } from '@fortawesome/free-solid-svg-icons'
    import { fab, faPeriscope as fabPeriscope } from '@fortawesome/free-brands-svg-icons'
    library.add(faSpinner, fasSearch, fabPeriscope , fas, fab)
    import WeatherWidget from "../components/Weathe/WeatherWidget"
    import { defaultGeoLoc, geolocOptions, menuHiddenBreakpoint } from '../vars/index'
    import { mapGetters, mapMutations, mapActions } from 'vuex'
    import { MenuIcon, MobileMenuIcon } from '../components/svg'
    export default {
        components: {
            MenuIcon,
            MobileMenuIcon,

            WeatherWidget
        },
        data() {
            return {
                selectedParentMenu: '',
                searchKeyword: '',
                isMobileSearch: false,
                isSearchOver: false,
                menuHiddenBreakpoint,
                defaultGeoLoc,
                geolocOptions,
            }
        },
        methods: {
            ...mapMutations(['changeSideMenuStatus', 'changeSideMenuForMobile']),
            search() {
                this.searchKeyword = ''
            },
            searchClick() {
                if (window.innerWidth < this.menuHiddenBreakpoint) {
                    if (!this.isMobileSearch) {
                        this.isMobileSearch = true
                    } else {
                        this.search()
                        this.isMobileSearch = false
                    }
                } else {
                    this.search()
                }
            },
            handleDocumentforMobileSearch() {
                if (this.isSearchOver) {
                    this.isMobileSearch = false
                    this.searchKeyword = ''
                }
            },

        },
        computed: {
            ...mapGetters({
                menuType: 'getMenuType',
                menuClickCount: 'getMenuClickCount'
            })
        },
        beforeDestroy() {
            document.removeEventListener('click', this.handleDocumentforMobileSearch)
        },
        watch: {
            isMobileSearch(val) {
                if (val) {
                    document.addEventListener('click', this.handleDocumentforMobileSearch)
                } else {
                    document.removeEventListener('click', this.handleDocumentforMobileSearch)
                }
            }
        }
    }
</script>

<style scoped>

</style>
