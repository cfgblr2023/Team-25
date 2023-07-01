import React from 'react'

export default function Module() {
  return (
    <div className='Modules'>
      <div class="d-flex flex-column flex-md-row p-4 gap-4 py-md-5 align-items-center justify-content-center">
  <div class="list-group list-group-checkable d-grid gap-2 border-0">
    <input class="list-group-item-check pe-none" type="radio" name="listGroupCheckableRadios" id="listGroupCheckableRadios1" value="" checked=""/>
    <label class="list-group-item rounded-3 py-3" for="listGroupCheckableRadios1">
      First radio
      <span class="d-block small opacity-50">With support text underneath to add more detail</span>
    </label>

    <input class="list-group-item-check pe-none" type="radio" name="listGroupCheckableRadios" id="listGroupCheckableRadios2" value=""/>
    <label class="list-group-item rounded-3 py-3" for="listGroupCheckableRadios2">
      Second radio
      <span class="d-block small opacity-50">Some other text goes here</span>
    </label>

    <input class="list-group-item-check pe-none" type="radio" name="listGroupCheckableRadios" id="listGroupCheckableRadios3" value=""/>
    <label class="list-group-item rounded-3 py-3" for="listGroupCheckableRadios3">
      Third radio
      <span class="d-block small opacity-50">And we end with another snippet of text</span>
    </label>

    <input class="list-group-item-check pe-none" type="radio" name="listGroupCheckableRadios" id="listGroupCheckableRadios4" value="" disabled=""/>
    <label class="list-group-item rounded-3 py-3" for="listGroupCheckableRadios4">
      Fourth disabled radio
      <span class="d-block small opacity-50">This option is disabled</span>
    </label>
  </div>
</div>

    </div>
  )
}
