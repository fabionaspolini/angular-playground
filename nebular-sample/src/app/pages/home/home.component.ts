import { ChangeDetectionStrategy, Component, OnInit, TemplateRef, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NbDialogService, NbMenuItem, NbTagComponent, NbTagInputAddEvent, NbToastrService } from '@nebular/theme';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit {

  items: NbMenuItem[] = [{ title: 'Profile' }, { title: 'Log out' }];

  trees: Set<string> = new Set(["teste", "tag"]);

  selectedItem = '2';

  checked = false;

  isBold = false;
  isItalic = true;
  isUnderline = false;

  constructor(
    private dialogService: NbDialogService,
    private toastrService: NbToastrService) { }

  ngOnInit(): void {
  }

  toggle(checked: boolean) {
    this.checked = checked;
  }

  onTagRemove(tagToRemove: NbTagComponent): void {
    this.trees.delete(tagToRemove.text);
  }

  onTagAdd({ value, input }: NbTagInputAddEvent): void {
    if (value) {
      this.trees.add(value)
    }
    input.nativeElement.value = '';
  }

  openDialog(dialog: TemplateRef<any>) {
    this.dialogService.open(dialog, {
      context: 'this is some additional data passed to dialog',
      closeOnEsc: true,
      closeOnBackdropClick: false
    });
  }

  showToast() {
    this.toastrService.success("Testeee", "Sucesso", { limit: 3 })
  }

}
