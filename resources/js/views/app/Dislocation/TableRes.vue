<template>
    <div>
        <b-row>
            <b-col xxs="12">
                <piaf-breadcrumb :heading=" $route.name "></piaf-breadcrumb>
                <div class="separator mb-5"></div>
            </b-col>
        </b-row>

        <b-row class="table-res-toolbar">
            <b-button-toolbar >
                <b-form-select  v-model="selected" size="sm" class="mt-2 mb-2 ml-2">
                    <b-form-select-option v-for="rsp in rsps" :value=" rsp.RSPNAME " :key="rsp.RSPCODE">{{ rsp.RSPNAME  }} ( {{ rsp.RSPCODE }} )</b-form-select-option>
                    <template v-slot:first>
                        <b-form-select-option :value="null" disabled>-- Выберите группу флота --</b-form-select-option>
                        <b-form-select-option :value="ALL">-- ВСЕ --</b-form-select-option>
                    </template>
                </b-form-select>
            </b-button-toolbar>
            <b-row>
                <b-col class="col-12 text-center text-primary">
                    <div class="mt-3"><strong>{{ selected }}</strong></div>
                </b-col>
            </b-row>
        </b-row>
        <b-row>
            <b-table
                sticky-header
                :caption-top="topCaption"
                :borderless="borderless"
                :no-border-collapse="noCollapse"
                :striped="striped"
                hover
                small
                responsive="sm"
                :items="disls"
                :fields="fields"
                head-row-variant="dark"
                head-variant="dark"
                :tbody-tr-class="rowClass"
            >
                <caption>Дислокация флота</caption>

                <template #thead-top="data"  >

                    <b-tr>
                        <!--b-th rowspan="2" sticky-column text-align="center">Судно</b-th>
                        <b-th></b-th-->
                        <b-th colspan="4">Дислокация</b-th>
                        <b-th colspan="6">Запасы топлива, масла, воды</b-th>
                        <b-th colspan="7">Выполняемый переход</b-th>
                        <b-th colspan="3">Груз</b-th>
                        <b-th colspan="5">Планируемая грузоперевозка</b-th>
                    </b-tr>
                </template>

            </b-table>
<br/>
            <!--b-table hover :items="disls" :fields="fields" caption-top responsive="sm"></b-table>
            <template #table-caption>Дислокация флота</template-->
        </b-row>
        <b-row>
            <!--ag-grid-vue style="width: 100%; height: 500px;"
                         class="ag-theme-alpine"
                         :columnDefs="ColumnDefs"
                         :rowData="RowData">
            </ag-grid-vue>
            {{ testdisl }}-->
            <!--<JqxGrid :width="'98%'" :source="dataAdapter" :columns="columns" />
            <ejs-grid :datasrc="disls" :allowPaging="true" :pageSettings="pageSettings">
                <e-columns>

                </e-columns>
            </ejs-grid-->
            <!--fancy-grid-vue
                :config="gridConfig">
            </fancy-grid-vue-->

        </b-row>
    </div>
</template>

<script>
    import axios from 'axios'
    import moment from 'moment'
   // import FancyGridVue from 'fancy-grid-vue'
   // import { AgGridVue } from "ag-grid-vue";
    //import JqxGrid from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxgrid.vue';
   // import VueAxios from 'vue-axios'
    export default {
        name: "TableRes",
        components: {
            //JqxGrid
          //  AgGridVue
           // FancyGridVue
        },
        data() {
            return {
                selected: null,
                noCollapse: false,
                topCaption: true,
                borderless: true,
                striped: true,
                fields: [
                   // Дислокация
                    {key: 'VSLABBR', label: 'Судно', sortable: true},
                    {key: 'DATEOPP', label: 'Дата,время операции', formatter: value => {
                        if (value == null) {
                            return ''
                        } else {
                            return moment(String(value)).format('DD.MM/HHч.')
                        }}
                    },

                    /*{key: 'DATEOPP', label: 'Дата,время операции', formatter: value => {
                        return moment(String(value)).format('DD.MM/HHч.');
                        } },*/
                    {key: 'CODEOPP', label: 'Код оп.'},
                    {key: 'PLACEVSL', label: 'Дислокация'},

                    //
                    {key: 'QTYFUEL', label: 'Диз. топл.', formatter: 'toRounded'
                        },
                    {key: 'QTYFUEL_M', label: 'Мот.топл. с/с 0,5%'},
                    {key: 'QTYFUEL_S', label: 'Мот.топл. с/с 0,1%'},
                    {key: 'QTYFUEL_O', label: 'Мот.топл. с/с 1,5%'},
                    {key: 'QTYOIL', label: 'Масло'},
                    {key: 'QTYWATER', label: 'Вода'},
                    {key: 'PRTABBR', label: 'Порт отправл.'},
                    {key: 'STARTDATE', label: 'Дата приб.', formatter: value =>{
                        if (value == null) {
                            return ''
                        } else {
                            return moment(String(value)).format('DD.MM/HHч.')
                        }}
                    },
                    {key: 'STARTDATEOPP', label: 'Нач.оп.', formatter: value => {
                        if ((value == null) || (value == '1900-01-01 00:00:00')) {
                            return ''
                        } else {
                            return moment(String(value)).format('DD.MM/HHч.')
                        }}
                    },
                    {key: 'STOPDATEOPP', label: 'Кон.оп.', formatter: value => {
                            if (value == null) {
                                return ''
                            } else {
                                return moment(String(value)).format('DD.MM/HHч.')
                            }}
                    },
                    {key: 'DATEETS', label: 'Дата ETS', formatter: value => {
                        if (value == null) {
                            return ''
                        } else {
                            return moment(String(value)).format('DD.MM')
                        }}
                    },
                    {key: 'PRTETSABBR', label: 'Порт назн.'},
                    {key: 'STOPDATE', label: 'Дата ETA', formatter: value => {
                        if (value == null) {
                            return ''
                        } else {
                            return moment(String(value)).format('DD.MM')
                        }}
                    },
                    {key: 'CRGABBR', label: 'Наимен. груза'},
                    {key: 'QTYCARGO', label: 'Кол-во груза'},
                    {key: 'CODEUNIT', label: 'Ед. изм.'},
                    {key: 'DATEPLN', label: 'Дата', formatter: value => {
                        if (value == null) {
                            return ''
                        } else {
                            return moment(String(value)).format('DD.MM.YY')
                        }}
                    },
                    {key: 'PRTPLNSTARTABBR', label: 'Порт отпр.'},
                    {key: 'CRGPLNABBR', label: 'Наимен. груза'},
                    {kay: 'PRTPLNSTOPABBR', label: 'Порт назнач.'}
                    ],
                //title: "Vue with FancyGrid",
                //theme: "gray",
                //width: 700,
                //height: 400,
                //data:
                //defaults:
                //columns: this.getColumns(),
                rsps: [],
                disls: [],
               // gridConfig: {
                  //  title: 'Vue with FancyGrid',
                  //  theme: 'gray',
                  //  width: 700,
                  //  height: 400,
                  //  data: disls, //this.getDisl(),
                  //  resizable: true,
                  //  defaults: this.getDefaults(),
                  //  selModel: 'rows',
                 //   trackOver: true
                //}
             //   gridOptions: null,
             //   RowData: null,
              //  ColumnDefs: null,
              //  testdisl: []

            }
        },

        methods: {
            getRsp() {
                axios.get('/api/rsp').then((response) => (
                    this.rsps = response.data
                )).catch((error) =>
                    this.errors = error.response.data.errors || error.message);

            },
            getDisl() {
                axios.get('/api/disl').then((response) => (
                    this.disls = response.data
                )).catch((error) =>
                    this.errors = error.response.data.errors || error.message);

            },

            //определение строк с судами под грузовыми операциями
             rowClass(item, type) {
                if(!item || type !== 'row') return
                 if (item.CODEOPP === 'OP' || item.CODEOPP === 'PP' || item.CODEOPP === 'PV' || item.CODEOPP === 'KVG' || item.CODEOPP === 'PPR') return 'table-success';
             },
            toRounded(value)
            {
                //return Math.floor((value*100) / 100)
                return parseFloat(value).toFixed(2)
            }
        },

            mounted() {
                this.getRsp()
                this.getDisl()

                //this.ShowTestDisl()
            },


    }
</script>

<style lang="scss">

</style>
