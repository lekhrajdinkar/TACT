import { NgModule } from "@angular/core";
import {SplitButtonModule} from 'primeng/splitbutton';
import {PaginatorModule} from 'primeng/paginator';
import {TableModule} from 'primeng/table';
import {PanelModule} from 'primeng/panel';
import {DropdownModule} from 'primeng/dropdown';
import {MultiSelectModule} from 'primeng/multiselect';
import {TreeTableModule} from 'primeng/treetable';
import {TreeNode} from 'primeng/api';

@NgModule({
    imports:[SplitButtonModule,PaginatorModule, TableModule, PanelModule, DropdownModule, MultiSelectModule
    ,TreeTableModule],
    exports:[SplitButtonModule, PaginatorModule, TableModule, PanelModule, DropdownModule, MultiSelectModule
    ,TreeTableModule]
})
export class PrimeNGModule {}
