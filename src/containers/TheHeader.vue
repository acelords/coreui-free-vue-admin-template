<template>
  <CHeader fixed with-subheader light>
    <CToggler
      in-header
      class="ml-3 d-lg-none"
      v-c-emit-root-event:toggle-sidebar-mobile
    />
    <CToggler
      in-header
      class="ml-3 d-md-down-none"
      v-c-emit-root-event:toggle-sidebar
    />
    <CHeaderBrand
      class="mx-auto d-lg-none" 
      src="img/brand/coreui-base.svg"
      width="97"
      height="46"
      alt="CoreUI Logo"
      :wrappedInLink="{ href: 'https://coreui.io', target: '_blank'}"
    />
    <CHeaderNav class="d-md-down-none mr-auto">
      <CHeaderNavItem class="px-3" to="/dashboard">Dashboard</CHeaderNavItem>
      <CHeaderNavItem class="px-3" to="/users" exact>Users</CHeaderNavItem>
      <CHeaderNavItem class="px-3">Settings</CHeaderNavItem>
    </CHeaderNav>
    <CHeaderNav class="mr-4">
      <CHeaderNavItem class="d-md-down-none mx-2">
        <i class="cui-bell"></i>
      </CHeaderNavItem>
      <CHeaderNavItem class="d-md-down-none mx-2">
        <i class="cui-list"></i>
      </CHeaderNavItem>
      <CHeaderNavItem class="d-md-down-none mx-2">
        <i class="cui-envelope-open"></i>
      </CHeaderNavItem>
      <TheHeaderDropdownAccnt/>
    </CHeaderNav>
    
    <CToggler
      in-header
      class="ml-3"
      v-c-emit-root-event:toggle-aside
    />
    <CSubheader class="px-3">
      <CBreadcrumbRouter class="border-0"/>
    </CSubheader>
  </CHeader>
</template>

<script>
import TheHeaderDropdownAccnt from './TheHeaderDropdownAccnt'

export default {
  name: 'TheHeader',
  components: {
    TheHeaderDropdownAccnt
  }
}
</script>
