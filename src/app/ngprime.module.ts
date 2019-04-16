import { NgModule } from "@angular/core";
import {SplitButtonModule} from 'primeng/splitbutton';
import {PaginatorModule} from 'primeng/paginator';
import {TableModule} from 'primeng/table';
import {PanelModule} from 'primeng/panel';
import {DropdownModule} from 'primeng/dropdown';
import {MultiSelectModule} from 'primeng/multiselect';

@NgModule({
    imports:[SplitButtonModule,PaginatorModule, TableModule, PanelModule, DropdownModule, MultiSelectModule],
    exports:[SplitButtonModule, PaginatorModule, TableModule, PanelModule, DropdownModule, MultiSelectModule]
})
export class PrimeNGModule {}
