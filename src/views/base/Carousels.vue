<template>
  <CRow>
    <CCol md="12" lg="7">
      <CCard>
        <CCardHeader>
          <i class="fa fa-align-justify"></i>
          <strong> Bootstrap Carousel</strong>
          <div class="card-header-actions">
            <a 
              href="https://coreui.io/vue/docs/3.0/components/Carousel" 
              class="card-header-action" 
              rel="noreferrer noopener" 
              target="_blank"
            >
              <small class="text-muted">docs</small>
            </a>
          </div>
        </CCardHeader>
        <CCardBody>
          <CCarousel
            arrows
            indicators
            animate
            height="400px"
          >
            <CCarouselItem
            captionHeader="First Slide"
              image="https://lorempixel.com/1024/480/technics/2/"
            captionText="Nulla vitae elit libero, a pharetra augue mollis interdum."
            />
            <CCarouselItem
            captionHeader="Blank page"
              :image="{ blankColor: 'grey' }"
            captionText="Nulla vitae elit libero, a pharetra augue mollis interdum."
            />
            <CCarouselItem
              image="https://lorempixel.com/1024/480/technics/8/"
            />
          </CCarousel>
        </CCardBody>
      </CCard>
    </CCol>
  </CRow>
</template>

<script>
export default {
  name: 'Carousels'
}
</script>
