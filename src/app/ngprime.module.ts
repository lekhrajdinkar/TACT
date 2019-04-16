import { NgModule } from "@angular/core";
import {SplitButtonModule} from 'primeng/splitbutton';
import {PaginatorModule} from 'primeng/paginator';
import {TableModule} from 'primeng/table';
import {PanelModule} from 'primeng/panel';

@NgModule({
    imports:[SplitButtonModule,PaginatorModule, TableModule, PanelModule],
    exports:[SplitButtonModule, PaginatorModule, TableModule, PanelModule]
})
export class PrimeNGModule {}
