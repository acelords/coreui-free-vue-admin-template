<template>
  <div>
    <CCard>
      <CCardHeader>
        <i class="fa fa-align-justify"></i><strong> Bootstrap Navs</strong>
        <div class="card-header-actions">
          <a 
            href="https://coreui.io/vue/docs/3.0/components/Nav" 
            class="card-header-action" 
            rel="noreferrer noopener" 
            target="_blank"
          >
            <small class="text-muted">docs</small>
          </a>
        </div>
      </CCardHeader>
      <CCardBody>
        <CNav>
          <CNavItem active>Active</CNavItem>
          <CNavItem title="Link"/>
          <CNavItem>Another Link</CNavItem>
          <CNavItem disabled>Disabled</CNavItem>
        </CNav>
      </CCardBody>
    </CCard>
    <CCard>
      <CCardHeader>
        <i class="fa fa-align-justify"></i>
        <strong> Bootstrap Navs </strong>
        <small>icons</small>
      </CCardHeader>
      <CCardBody>
        <CNav>
          <CNavItem active>
            <i class="cui-basket-loaded"></i>
          </CNavItem>
          <CNavItem>
            Link
          </CNavItem>
          <CNavItem>
            Another Link
          </CNavItem>
          <CNavItem disabled>Disabled</CNavItem>
        </CNav>
      </CCardBody>
    </CCard>
    <CCard>
      <CCardHeader>
        <i class="fa fa-align-justify"></i>
        <strong> Bootstrap Navs </strong>
        <small>tab style</small>
      </CCardHeader>
      <CCardBody>
        <CNav tabs>
          <CNavItem active>
            Active
          </CNavItem>
          <CNavItem>
            Link
          </CNavItem>
          <CNavItem>
            Another Link
          </CNavItem>
          <CNavItem disabled>Disabled</CNavItem>
        </CNav>
      </CCardBody>
    </CCard>
    <CCard>
      <CCardHeader @click="item++">
        <i class="fa fa-align-justify"></i>
        <strong> Bootstrap Navs </strong>
        <small>pill style</small>
      </CCardHeader>
      <CCardBody>
        <CNav pills>
          <CNavItem active>Active</CNavItem>
          <CNavItem>Link</CNavItem>
          <CNavItem>Another Link</CNavItem>
          <CNavItem disabled>Disabled</CNavItem>
        </CNav>
      </CCardBody>
    </CCard>
    <CCard>
      <CCardHeader>
        <i class="fa fa-align-justify"></i>
        <strong> Bootstrap Navs </strong>
        <small>fill tabs</small>
      </CCardHeader>
      <CCardBody>
        <CNav fill tabs>
          <CNavItem active>Active</CNavItem>
          <CNavItem>Link</CNavItem>
          <CNavItem>Link with a long name </CNavItem>
          <CNavItem disabled>Disabled</CNavItem>
        </CNav>
      </CCardBody>
    </CCard>
    <CCard>
      <CCardHeader>
        <i class="fa fa-align-justify"></i>
        <strong> Bootstrap Navs </strong>
        <small>justified tabs</small>
      </CCardHeader>
      <CCardBody>
        <CNav justified tabs>
          <CNavItem active>Active</CNavItem>
          <CNavItem>Link</CNavItem>
          <CNavItem>Link with a long name </CNavItem>
          <CNavItem disabled>Disabled</CNavItem>
        </CNav>
      </CCardBody>
    </CCard>
    <CCard>
      <CCardHeader>
        <i class="fa fa-align-justify"></i>
        <strong> Bootstrap Navs </strong>
        <small>dropdown support</small>
      </CCardHeader>
      <CCardBody>
        <CNav pills>
          <CNavItem active>Active</CNavItem>
          <CNavItem>Link</CNavItem>
          <CDropdown
            id="nav7_ddown"
            nav
            placement="bottom-end"
            button-content="Dropdown"
          >
            <!-- <a class="nav-link dropdown-toggle" slot="button">Dropdown</a> -->
            <CDropdownItem>one</CDropdownItem>
            <CDropdownItem>two</CDropdownItem>
            <CDropdownDivider/>
            <CDropdownItem>three</CDropdownItem>
          </CDropdown>
        </CNav>
      </CCardBody>
    </CCard>
    <CCard>
      <CCardHeader>
        <i class="fa fa-align-justify"></i>
        <strong> Bootstrap Navs </strong>
        <small>vertical variation</small>
      </CCardHeader>
      <CCardBody>
        <CRow>
          <CCol col="3" class="m-0">
            <CNav vertical pills >
              <CNavItem active>Active</CNavItem>
              <CNavItem>Link</CNavItem>
              <CNavItem>Another Link</CNavItem>
              <CNavItem disabled>Disabled</CNavItem>
            </CNav>
          </CCol>
        </CRow>
      </CCardBody>
    </CCard>
  </div>
</template>

<script>
export default {
  name: 'Navs',
  data () {
    return {
      item: 2
    }
  }
}
</script>
