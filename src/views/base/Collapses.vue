<template>
  <CRow>
    <CCol col="12" md="6">
      <CCard>
        <CCardHeader>
          <i class="fa fa-align-justify"></i>
          <strong> Bootstrap Collapse </strong>
          <div class="card-header-actions">
            <a 
              href="https://coreui.io/vue/docs/3.0/components/Collapse" 
              class="card-header-action" 
              rel="noreferrer noopener" 
              target="_blank"
            >
              <small class="text-muted">docs</small>
            </a>
          </div>
        </CCardHeader>
        <CCardBody>
          <CButton @click="collapse = !collapse" color="primary">
            Toggle Collapse
          </CButton>
          <CCollapse :show="collapse" class="mt-2">
            <CCard body-wrapper>
              <p class="card-text">Collapse contents Here</p>
              <CButton  
                @click="innerCollapse = !innerCollapse" 
                size="sm" 
                color="secondary"
              >
                Toggle Inner Collapse
              </CButton>
              <CCollapse :show="innerCollapse" class="mt-2">
                <CCard body-wrapper>Hello!</CCard>
              </CCollapse>
            </CCard>
          </CCollapse>
        </CCardBody>
      </CCard>
    </CCol>
  </CRow>
</template>

<script>
export default {
  name: 'Collapses',
  data () {
    return {
      collapse: false,
      innerCollapse: false,
      text: `
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
        richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor
        brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon
        tempor, sunt aliqua put a bird on it squid single-origin coffee nulla
        assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore
        wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher
        vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic
        synth nesciunt you probably haven't heard of them accusamus labore VHS.
      `
    }
  }
}
</script>
