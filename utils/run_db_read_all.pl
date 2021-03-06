# -*- perl -*-

$GET = "-X GET";
$POST = "-X POST";
$PUT = "-X PUT";
$DELETE = "-X DELETE";

$URL  = "http://localhost:8000";

$HEADER_CONTENT_TYPE_JSON = "--header 'Content-Type: application/json'";

######################################################################

sub send
{
  my( $method, $url, $data ) = @_;

  my @cmd = ( "curl", ${method}, ${url} );
  push @cmd, ${HEADER_CONTENT_TYPE_JSON}, ${data} if( $data ne "" );

  printf STDERR "%s\n", ('*' x 80);
  printf STDERR "Test: %s\n", join( " ", @cmd );
  system( sprintf( "%s | python -m json.tool", join( " ", @cmd ) ) );
  printf STDERR "%s\n", ('*' x 80);
}

######################################################################

$TABLE = "users";

# $DATA1 = "--data '{\"email\":\"ab\@c.d\",\"first_name\":\"Alpha\",\"last_name\":\"Bravo\",\"pw\":\"abcdefgh\",\"birthday\":\"2017-01-23\"}'";

######################################################################

&send( ${GET}, "${URL}/${TABLE}/" );

