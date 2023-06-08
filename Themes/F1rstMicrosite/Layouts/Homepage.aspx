﻿<%@ Page Language="C#" MasterPageFile="Site.Master" AutoEventWireup="true" Inherits="Rock.Web.UI.RockPage" %>

<asp:Content ID="ctFeature" ContentPlaceHolderID="feature" runat="server">

    <Rock:Zone Name="Feature" runat="server" />

</asp:Content>

<asp:Content ID="ctMain" ContentPlaceHolderID="main" runat="server">

	<main id="site-content" class="home">

        <!-- Start Content Area -->

        <!-- Ajax Error -->
        <div class="alert alert-danger ajax-error no-index" style="display:none">
          <div class="row">
            <div class="col-md-12">
              <p><strong>Error</strong></p>
              <span class="ajax-error-message"></span>
            </div>
          </div>
        </div>
        <section class="c-section">
        <div class="row">
            <div class="col-md-8 center-block">
                <Rock:Zone Name="Sub Feature" runat="server" />
            </div>
        </div>
        </section>
        <div class="row">
            <div class="col-md-12">
                <Rock:Zone Name="Section A" runat="server" />
            </div>
        </div>
        <Rock:Zone Name="Section B" runat="server" />
        <Rock:Zone Name="Section C" runat="server" />
        <Rock:Zone Name="Section D" runat="server" />

        <!-- End Content Area -->

	</main>

</asp:Content>
