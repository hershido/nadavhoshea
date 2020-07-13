import React from 'react';

export default function Footer() {
	return (
		<div className='footer'>
			<div className='footer-content'>
				<div className='social-icons'>
					<a href='https://www.facebook.com/nadav.hoshea' target='blank'>
						<i class='fab fa-facebook-square'></i>
					</a>
					<a href='https://www.instagram.com/nadavhoshea/' target='blank'>
						<i class='fab fa-instagram-square'></i>
					</a>
					<a href='mailto:nadav.hoshea@gmail.com' target='blank'>
						<i class='fas fa-envelope-square'></i>
					</a>
				</div>
				<div className='nadav'>© 2020 Nadav Hoshea</div>
				<div className='dodo'>
					Web Design & development:
					<span className='dodo-link'>
						<a href='https://www.facebook.com/ido.hershkovitz.5' target='blank'>
							Dodo
						</a>
					</span>
				</div>
			</div>
		</div>
	);
}
