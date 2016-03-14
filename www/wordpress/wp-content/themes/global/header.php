<?php
/**
* The header for our theme.
*
* This is the template that displays all of the <head> section and everything up until <div id="content">
				*
				* @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
				*
				* @package global
				*/
	?><!DOCTYPE html>
	<html <?php language_attributes(); ?>>
		<head>
			<meta charset="<?php bloginfo( 'charset' ); ?>">
			<meta name="viewport" content="width=device-width, initial-scale=1">
			<link rel="profile" href="http://gmpg.org/xfn/11">
			<link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>">
			<link href='https://fonts.googleapis.com/css?family=Roboto:400,300,500,700' rel='stylesheet' type='text/css'>
			<?php wp_head(); ?>
		</head>
		<body <?php body_class(); ?>>
			<?php do_action( 'before' ); ?>
			<header class="header">
				<nav class="header__nav">
					<?php // substitute the class "container-fluid" below if you want a wider content area ?>
					<div class="container-fluid">
						<div class="container">
							<div class="row">
								<div class="col-sm-12">
									<div class="navbar navbar-default">
										<div class="navbar-header">
											<!-- .navbar-toggle is used as the toggle for collapsed navbar content -->
											<button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
											<span class="sr-only"><?php _e('Toggle navigation','_tk') ?> </span>
											<span class="icon-bar"></span>
											<span class="icon-bar"></span>
											<span class="icon-bar"></span>
											</button>
											<!-- Your site title as branding in the menu -->
											<a class="navbar-brand" href="<?php echo esc_url( home_url( '/' ) ); ?>" title="<?php echo esc_attr( get_bloginfo( 'name', 'display' ) ); ?>" rel="home"><img src="<?php bloginfo('template_directory')?>/assets/images/logo.png" id="logo"/></a>
										</div>
										<!-- The WordPress Menu goes here -->
										<?php wp_nav_menu(
											array(
												'theme_location'	 	=> 'primary',
												'depth'             => 2,
												'container'         => 'div',
												'container_class'   => 'collapse navbar-collapse',
												'menu_class' 				=> 'nav navbar-nav',
												'fallback_cb' 			=> 'wp_bootstrap_navwalker::fallback',
												'menu_id'						=> 'main-menu',
												'walker' 						=> new wp_bootstrap_navwalker()
											)
										); ?>
										</div><!-- .navbar -->
									</div>
								</div>
								</div><!-- .container -->
								</div>
								</nav>
								<!-- Front page banner -->
								<?php if( is_front_page()): ?>
									<div class="header__banner"><a href="#" target="_blank"><img src="<?php bloginfo('template_directory')?>/assets/images/BANER.jpg" class="header__banner-img"/></a></div>
								<?php endif; ?>

			</header><!-- .site-navigation -->
							<div class="container">
								<div id="page" class="site">
 								<header id="masthead" class="site-header" role="banner">
										<div class="site-branding">
											<?php
											if ( is_front_page() && is_home() ) : ?>
											<h1 class="site-title"><a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home"><?php bloginfo( 'name' ); ?></a></h1>
											<?php else : ?>
											<p class="site-title"><a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home"><?php bloginfo( 'name' ); ?></a></p>
											<?php
											endif;
											$description = get_bloginfo( 'description', 'display' );
											if ( $description || is_customize_preview() ) : ?>
											<p class="site-description"><?php echo $description; /* WPCS: xss ok. */ ?></p>
											<?php
											endif; ?>
											</div><!-- .site-branding -->
											</header><!-- #masthead -->
											<div id="content" class="site-content">
											<div class="row">
											<div class="col-xs-12 col-md-7">