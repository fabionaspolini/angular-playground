import { Component, OnInit, ViewChild } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PoDynamicFormField } from '@po-ui/ng-components';
import { PoPageDynamicEditActions } from '@po-ui/ng-templates';

@Component({
  selector: 'app-cad-usuario',
  templateUrl: './cad-usuario.component.html',
  styleUrls: ['./cad-usuario.component.scss']
})
export class CadUsuarioComponent implements OnInit {

  public serviceApi: string = "https://www.concili.com.br/api/admin/v2/manual/antecipation/10"

  public readonly actions: PoPageDynamicEditActions = {
    save: "https://www.concili.com.br/api/admin/v2/manual/antecipation/10",
    saveNew: "https://www.concili.com.br/api/admin/v2/manual/antecipation/10/novo",
  };

  public readonly fields: Array<PoDynamicFormField> = [
    { property: 'name', label: 'Nome', gridColumns: 6 },
    { property: 'date_paid', label: 'Data pagamento', type: 'date' },
    { property: 'total_brute', label: 'Total bruto', type: 'number', format: '1.2-2', gridColumns: 6, divider: 'Valores' },
    { property: 'total_liquid', label: 'Total líquido', type: 'number', format: '1.2-2', gridColumns: 6 },
  ];

  public data_teste: string = "2022-01-01T03:00:00.000Z"
  // public startDate: string = <any>new Date();
  public startDate: string = "2017-11-28T03:00:00"

  constructor() { }

  ngOnInit(): void {
    console.log(this.startDate);

  }

}
