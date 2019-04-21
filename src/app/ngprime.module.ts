import { NgModule } from "@angular/core";
import {SplitButtonModule} from 'primeng/splitbutton';
import {PaginatorModule} from 'primeng/paginator';
import {TableModule} from 'primeng/table';
import {PanelModule} from 'primeng/panel';
import {DropdownModule} from 'primeng/dropdown';
import {MultiSelectModule} from 'primeng/multiselect';
import {TreeTableModule} from 'primeng/treetable';
import {TreeNode} from 'primeng/api';
import {ChartModule} from 'primeng/chart';
import {CardModule} from 'primeng/card';
import {OrganizationChartModule} from 'primeng/organizationchart';
import {DialogModule} from 'primeng/dialog';

@NgModule({
    imports:[SplitButtonModule,PaginatorModule, TableModule, PanelModule, DropdownModule, MultiSelectModule
    ,TreeTableModule,ChartModule , CardModule, DialogModule],

    exports:[SplitButtonModule, PaginatorModule, TableModule, PanelModule, DropdownModule, MultiSelectModule
    ,TreeTableModule,ChartModule, CardModule, DialogModule]
})
export class PrimeNGModule {}
