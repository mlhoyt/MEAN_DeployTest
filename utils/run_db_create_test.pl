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

$DATA = "--data '{\"email\":\"z\@y.x\",\"first_name\":\"ab\",\"last_name\":\"cd\",\"pw\":\"abcdefgh\",\"birthday\":\"2017-06-21\"}'";

######################################################################

&send( ${POST}, "${URL}/${TABLE}/", ${DATA} );

